import React, { useEffect, useState } from "react";
import { List, Avatar, Tag, Card, Spin } from "antd";
import { CustomLoader, useIsMobile } from "../comman";
import { getMaintenanceRequest } from "../service";

interface MaintenanceItem {
  image: string;
  name: string;
  date: string;
  color: string;
  status: string;
}
type StatusType = "Pending" | "In Progress" | "Resolved";
const statusColors: Record<StatusType, string> = {
  Pending: "red",
  "In Progress": "orange",
  Resolved: "green",
};

const MaintenanceRequestList = () => {
  const isMobile = useIsMobile();
  const [data, setData] = useState<MaintenanceItem[]>([]);
  const [loading, setLoading] = useState(false);
  const getMaintenanceRequests = async () => {
    setLoading(true);
    const response = await getMaintenanceRequest({});
    if (response.status) {
      setData(response.payload);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    getMaintenanceRequests();
  }, []);

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <Card
      title="Recent Maintenance Requests"
      style={{
        borderRadius: 12,
        width: isMobile ? "100%" : 500,
        maxWidth: 600,
        height: isMobile ? "100%" : 450,
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={`Date: ${item.date}`}
            />
            <Tag color={statusColors[item.status as StatusType]}>
              {item.status}
            </Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default MaintenanceRequestList;
