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
import { CustomLoader, MessageModal, useIsMobile } from "../comman";
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

  // if (loading) {
  //   return <CustomLoader />;
  // }

  return (
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
      style={{ width: isMobile ? "100%" : 720 }}
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
          {["2024", "2023"].map((yr) => (
            <Option key={yr} value={yr}>
              {yr}
            </Option>
          ))}
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
          {[
            { key: "collected", color: "#a45ee5", name: "Collected ($)" },
            { key: "invoiced", color: "#fa6e6f", name: "Invoiced ($)" },
          ].map(({ key, color, name }) => (
            <Bar
              key={key}
              dataKey={key}
              fill={color}
              name={name}
              radius={[8, 8, 0, 0]}
              barSize={isMobile ? 20 : 30}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default InvoiceChart;
