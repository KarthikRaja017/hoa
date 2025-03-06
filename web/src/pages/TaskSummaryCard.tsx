import React from "react";
import { Card, Typography, Divider, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useIsMobile } from "../comman";

const { Title, Text } = Typography;

const TaskSummaryCard = () => {
  const isMobile = useIsMobile();

  return (
    <Card
      style={{
        width: isMobile ? "100%" : 350,
        borderRadius: 12,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: isMobile ? "12px" : "16px",
      }}
    >
      <Title level={isMobile ? 5 : 4} style={{ margin: 0 }}>
        27 May 2025
      </Title>
      <Text type="secondary">Next Payment Date</Text>

      <Divider style={{ margin: "12px 0" }} />

      <Text strong>Tasks Waiting</Text>
      <div style={{ display: "flex", alignItems: "center", marginTop: 4 }}>
        <div
          style={{
            width: 4,
            height: 24,
            backgroundColor: "#6C63FF",
            borderRadius: 4,
            marginRight: 8,
          }}
        ></div>
        <Text>3</Text>
      </div>
      <Button type="link" size="small">
        View all Tasks <ArrowRightOutlined />
      </Button>

      <Divider style={{ margin: "12px 0" }} />
      <Text strong>Payments Waiting</Text>

      <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
        <div
          style={{
            width: 4,
            height: 24,
            backgroundColor: "#6C63FF",
            borderRadius: 4,
            marginRight: 8,
          }}
        ></div>
        <div>
          <Text strong>Member Units</Text>
          <br />
          <Text type="secondary">3 Units</Text>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
        <div
          style={{
            width: 4,
            height: 24,
            backgroundColor: "#6C63FF",
            borderRadius: 4,
            marginRight: 8,
          }}
        ></div>
        <div>
          <Text strong>Total Amount Pending</Text>
          <br />
          <Text type="secondary"> $ 25,410</Text>
        </div>
      </div>
    </Card>
  );
};

export default TaskSummaryCard;
