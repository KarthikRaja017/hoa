import React, { useState } from "react";
import { List, Avatar, Drawer, Badge } from "antd";


const Notifications = (props: any) => {
  const { notifications, open, setOpen } = props;
  return (
    <>
      <Drawer
        title="Notifications"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={320} // Adjust width as needed
      >
        {notifications.length > 0 ? (
          <List
            dataSource={notifications}
            renderItem={(item: any) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar style={{ backgroundColor: "#1890ff" }}>
                      {item.title[0]}
                    </Avatar>
                  }
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        ) : (
          <p style={{ textAlign: "center", margin: 0 }}>No new notifications</p>
        )}
      </Drawer>
    </>
  );
};

export default Notifications;
