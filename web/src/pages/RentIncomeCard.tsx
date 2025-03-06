import { Card, Switch } from "antd";
import { BarChartOutlined } from "@ant-design/icons";

const RentIncomeCard = () => {
  return (
    <Card
      style={{
        width: 250,
        borderRadius: 12,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <BarChartOutlined style={{ fontSize: 24, color: "#7367F0" }} />
        <div>
          <p style={{ margin: 0, fontSize: 14, color: "#999" }}>
            Total Rent Income
          </p>
          <p style={{ margin: 0, fontSize: 22, fontWeight: "bold" }}>200,000</p>
        </div>
      </div>
    </Card>
  );
};

export default RentIncomeCard;
