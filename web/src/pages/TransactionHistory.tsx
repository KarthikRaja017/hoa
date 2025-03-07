import React, { useEffect, useState } from "react";
import { Card, List, Avatar, Tag, Spin } from "antd";
import { CustomLoader, useIsMobile } from "../comman";
import { getTransactions } from "../service";

interface TransactionHistoryItem {
  avatar: string;
  name: string;
  date: string;
  amount: number;
  status: string;
}
const getStatusTag = (status: any) => {
  switch (status) {
    case "Completed":
      return <Tag color="green">Completed</Tag>;
    case "Pending":
      return <Tag color="orange">Pending</Tag>;
    case "Failed":
      return <Tag color="red">Failed</Tag>;
    default:
      return <Tag>{status}</Tag>;
  }
};

const TransactionHistory = () => {
  const isMobile = useIsMobile();
  const [data, setData] = useState<TransactionHistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const getTransactionsDetails = async () => {
    setLoading(true);
    const response = await getTransactions({});
    if (response.status) {
      setData(response.payload);
    }
    setLoading(false);
  };
  useEffect(() => {
    getTransactionsDetails();
  }, []);

  if (loading) {
    return <CustomLoader />;
  }
  
  return (
    <Card
      title="Recent Transactions"
      style={{ borderRadius: 12, width: isMobile ? "100%" : 570 }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<strong>{item.name}</strong>}
              description={`Date: ${item.date} | Amount: ${item.amount}`}
            />
            {getStatusTag(item.status)}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default TransactionHistory;
