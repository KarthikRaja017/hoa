import React, { useEffect, useState } from "react";
import { List, Avatar, Tag, Card, Spin } from "antd";
import { useIsMobile } from "../comman";
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

const MaintenanceRequestList = (props: any) => {
  const { setOpen, open } = props;
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
      )}
    </>
  );
};

export default MaintenanceRequestList;
