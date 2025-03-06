import { useEffect, useState } from "react";
import { Card, Select, Button, Spin } from "antd";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { MessageModal, useIsMobile } from "../comman";
import { getExpenses } from "../service";

const { Option } = Select;

interface ExpenseItem {
  name: string;
  value: number;
  color: string;
}

const ExpenseCard = () => {
  const [month, setMonth] = useState<string>("Jan 2024");
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();
  const [data, setData] = useState<ExpenseItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getExpensesDetails = async () => {
    setLoading(true);
    const response = await getExpenses({ monthYear: month });
    if (response?.status && Array.isArray(response.payload)) {
      setData(response.payload as ExpenseItem[]);
    } else {
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getExpensesDetails();
  }, [month]);

  return (
    <>
      {/* {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 9999,
          }}
        >
          <Spin size="large" />
        </div>
      )} */}
      <Card
        title="Expenses"
        extra={
          <Button
            type="default"
            icon={<SettingOutlined />}
            size={isMobile ? "small" : "middle"}
            onClick={() => setModalVisible(true)}
          >
            Manage Budget
          </Button>
        }
        style={{
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: isMobile ? "100%" : 350,
        }}
      >
        <MessageModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          message="The Manage Budget feature is currently under development. Please check back later!"
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            border: "2px solid #f0f0f0",
            width: isMobile ? "100%" : 150,
            padding: "5px 10px",
            borderRadius: 8,
          }}
        >
          <CalendarOutlined />
          <Select
            value={month}
            onChange={(value) => setMonth(`${value} 2024`)}
            style={{ width: "100%" }}
            bordered={false}
            size={isMobile ? "small" : "middle"}
          >
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
              <Option key={m} value={m}>{`${m} 2024`}</Option>
            ))}
          </Select>
        </div>

        <ResponsiveContainer width="100%" height={isMobile ? 180 : 200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={isMobile ? 40 : 50}
              outerRadius={isMobile ? 60 : 70}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || "#8884d8"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div style={{ marginTop: 20 }}>
          {data.map(({ name, color }) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 8,
                fontSize: isMobile ? 12 : 14,
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: color || "#8884d8",
                  borderRadius: "50%",
                  marginRight: 8,
                }}
              ></span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default ExpenseCard;
