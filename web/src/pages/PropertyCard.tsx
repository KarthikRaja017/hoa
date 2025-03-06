import React from "react";
import { Card } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { useIsMobile } from "../comman";

const PropertyCard = (props: any) => {
  const { title, value, extra, icon, color } = props;
  const isMobile = useIsMobile();

  return (
    <Card
      style={{
        borderRadius: 12,
        padding: isMobile ? "8px" : "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: isMobile ? 120 : 150,
        width: isMobile ? 280 : 350,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: color || "#A45EE5",
          width: isMobile ? 35 : 40,
          height: isMobile ? 35 : 40,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: isMobile ? 18 : 20,
        }}
      >
        {icon || <UsergroupAddOutlined />}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <div>
          <p style={{ fontSize: isMobile ? 10 : 12, color: "#888", margin: 0 }}>
            {title}
          </p>
          <h3 style={{ margin: 0, fontSize: isMobile ? 16 : 18 }}>{value}</h3>
        </div>
        {extra && (
          <div>
            <p
              style={{ fontSize: isMobile ? 10 : 12, color: "#888", margin: 0 }}
            >
              Total Units
            </p>
            <h3 style={{ margin: 0, fontSize: isMobile ? 16 : 18 }}>{extra}</h3>
          </div>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderLeft: "20px solid transparent",
          borderBottom: `20px solid ${color || "#A45EE5"}`,
        }}
      />
    </Card>
  );
};

export default PropertyCard;
