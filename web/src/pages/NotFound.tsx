import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FrownOutlined } from "@ant-design/icons";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      }}
    >
      <Result
        icon={<FrownOutlined style={{ fontSize: "80px", color: "#ff4d4f" }} />}
        title="Oops! Page Not Found"
        subTitle="The page you are looking for does not exist."
        extra={
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => navigate("/dashboard")}
            style={{ background: "#1890ff", border: "none" }}
          >
            Go to Dashboard
          </Button>
        }
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};

export default NotFound;
