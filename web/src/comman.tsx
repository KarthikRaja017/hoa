import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Typography } from "antd";
import { useEffect, useState } from "react";

export const getIsMobile = () => window.innerWidth <= 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
};

interface MessageModalProps {
  visible: boolean;
  onClose: () => void;
  message?: string;
}
const { Title, Text } = Typography;

export const MessageModal: React.FC<MessageModalProps> = ({
  visible,
  onClose,
  message = "This feature is under development. Stay tuned!",
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" type="primary" onClick={onClose}>
          Got it
        </Button>,
      ]}
      centered
    >
      <div style={{ textAlign: "center", padding: "20px" }}>
        <ExclamationCircleOutlined
          style={{ fontSize: "50px", color: "#faad14" }}
        />
        <Title level={4} style={{ marginTop: "15px" }}>
          Feature Not Available
        </Title>
        <Text type="secondary">{message}</Text>
      </div>
    </Modal>
  );
};
