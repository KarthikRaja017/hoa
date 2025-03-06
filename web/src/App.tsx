import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "antd";
import CustomHeader from "./components/Header";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/DashBoard";
const { Content } = Layout;
const App: React.FC = () => {
  
  return (
    <Router>
      <Layout style={{ width: "100vw", height: "auto" }}>
        <CustomHeader />
        <Content style={{ padding: "30px"}}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
