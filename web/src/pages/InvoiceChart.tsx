import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, Button, Select, DatePicker, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { MessageModal, useIsMobile } from "../comman";
import { getInvoices } from "../service";

const { Option } = Select;

const InvoiceChart = () => {
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [year, setYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState(null);

  const getInvoiceChartDetails = async () => {
    setLoading(true);
    const response = await getInvoices({ year: year });
    if (response.status) {
      setData(response.payload);
    }
    setLoading(false);
  };
  useEffect(() => {
    getInvoiceChartDetails();
  }, [year]);
  return (
    <>
      {loading ? (
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
      ) : (
        <Card
          title="Invoiced vs Paid"
          extra={
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size={isMobile ? "small" : "middle"}
              onClick={() => setModalVisible(true)}
            >
              Create Invoice
            </Button>
          }
          style={{
            width: isMobile ? "100%" : 720,
          }}
        >
          <MessageModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            message="The Create Invoice feature is currently under development. Please check back later!"
          />
          <div
            style={{
              marginBottom: 16,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <Select
              defaultValue="2024"
              size={isMobile ? "small" : "middle"}
              onChange={setYear}
            >
              <Option value="2024">2024</Option>
              <Option value="2023">2023</Option>
            </Select>
            <DatePicker
              picker="month"
              value={selectedMonth}
              size={isMobile ? "small" : "middle"}
              onChange={() => {
                setModalVisible(true);
                setSelectedMonth(null);
              }}
            />
          </div>
          <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: isMobile ? 10 : 30,
                left: isMobile ? 10 : 30,
                bottom: 10,
              }}
            >
              <XAxis
                dataKey="month"
                stroke="#8884d8"
                tick={{ fontSize: isMobile ? 10 : 12 }}
              />
              <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: isMobile ? 10 : 12 }} />
              <Bar
                dataKey="collected"
                fill="#a45ee5"
                name="Collected ($)"
                radius={[8, 8, 0, 0]}
                barSize={isMobile ? 20 : 30}
              />
              <Bar
                dataKey="invoiced"
                fill="#fa6e6f"
                name="Invoiced ($)"
                radius={[8, 8, 0, 0]}
                barSize={isMobile ? 20 : 30}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      )}
    </>
  );
};

export default InvoiceChart;
