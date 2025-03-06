import React, { useState } from "react";
import { Card, Switch } from "antd";
import { LineChartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useIsMobile } from "../comman";

const FinanceCard = styled(Card)`
  display: flex;
`;

const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 24px;
`;

const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 2px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FinanceSummary = () => {
  const [isExpense, setIsExpense] = useState(false);
  const [currency, setCurrency] = useState("$");
  const isMobile = useIsMobile();

  return (
    <FinanceCard
      style={{
        width: isMobile ? "100%" : "350px",
        height: isMobile ? "100%" : "130px",
        display: "flex",
      }}
    >
      <div style={{ display: "flex" }}>
        <IconCircle>
          {isExpense ? <ShoppingCartOutlined /> : <LineChartOutlined />}
        </IconCircle>
        <div style={{ marginLeft: 40 }}>
          <div>
            <Label>{isExpense ? "Total Expenses" : "Total Rent Income"}</Label>
            <Amount>
              {currency} {isExpense ? "80,000" : "200,000"}
            </Amount>
          </div>
          <ToggleWrapper>
            <Switch
              checked={currency === "€"}
              checkedChildren="€"
              unCheckedChildren="$"
              onChange={(checked) => setCurrency(checked ? "€" : "$")}
            />
            <Switch
              checked={isExpense}
              checkedChildren="Expenses"
              unCheckedChildren="Income"
              onChange={() => setIsExpense(!isExpense)}
            />
          </ToggleWrapper>
        </div>
      </div>
    </FinanceCard>
  );
};

export default FinanceSummary;
