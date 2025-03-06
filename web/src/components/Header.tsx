import { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Drawer,
  Button,
  Badge,
  Spin,
  Popover,
  List,
} from "antd";
import {
  SearchOutlined,
  MailOutlined,
  BellOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { MessageModal, useIsMobile } from "../comman";
import { useNavigate, useLocation } from "react-router-dom";

const { Header } = Layout;
interface MaintenanceItem {
  image: string;
  name: string;
  date: string;
  color: string;
  status: string;
}

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Residents & Members", path: "/residents" },
  { name: "Maintenance Requests", path: "/maintenance" },
  { name: "Payments & Dues", path: "/payments" },
];

const CustomHeader = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const currentMenuItem = menuItems.find((item) =>
      location.pathname.startsWith(item.path)
    );
    if (currentMenuItem) {
      setSelectedKey(currentMenuItem.name);
    }
  }, [location.pathname]);

  const handleMenuClick = (key: string) => {
    const selectedMenuItem = menuItems.find((item) => item.name === key);
    if (selectedMenuItem) {
      navigate(selectedMenuItem.path);
      setSelectedKey(key);
      setDrawerVisible(false);
    }
  };

  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fff",
          padding: isMobile ? "10px 15px" : "0 20px",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          margin: isMobile ? "10px" : "10px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src="https://static.vecteezy.com/system/resources/previews/046/593/462/non_2x/creative-logo-design-for-real-estate-company-vector.jpg"
            style={{
              marginRight: 10,
              width: isMobile ? 35 : 45,
              height: isMobile ? 35 : 45,
            }}
          />
          {!isMobile && (
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Homeowner Association
            </span>
          )}
        </div>
        {!isMobile && (
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            onClick={(e) => handleMenuClick(e.key)}
            style={{
              borderBottom: "none",
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            {menuItems.map((item) => (
              <Menu.Item
                key={item.name}
                style={{ fontWeight: "500", fontSize: "16px" }}
              >
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "10px" : "15px",
          }}
        >
          <SearchOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
          <MailOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
          <Badge count={3} style={{ cursor: "pointer" }}>
            <BellOutlined
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => setOpen(true)}
            />
          </Badge>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGQQPJTeRXYxfbXVhLLXPl4aCJCexZ4dS7Q&s"
            size={isMobile ? 30 : 40}
          />
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
            />
          )}
        </div>
        <MessageModal
          visible={open}
          onClose={() => setOpen(false)}
          message="The Manage Budget feature is currently under development. Please check back later!"
        />
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          closeIcon={<CloseOutlined />}
        >
          <Menu
            mode="vertical"
            selectedKeys={[selectedKey]}
            onClick={(e) => handleMenuClick(e.key)}
          >
            {menuItems.map((item) => (
              <Menu.Item
                key={item.name}
                style={{ fontWeight: "500", fontSize: "16px" }}
              >
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </>
  );
};

export default CustomHeader;
