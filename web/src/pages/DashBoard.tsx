import { Layout, Row, Col } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FireOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import PropertyCard from "./PropertyCard";
import InvoiceChart from "./InvoiceChart";
import CalendarComponent from "../components/CustomCalendar";
import ExpenseCard from "./ExpensesCard";
import MaintenanceRequestList from "./MaintenanceRequest";
import FinanceSummary from "./FinanceSummary";
import TransactionHistory from "./TransactionHistory";
import TaskSummaryCard from "./TaskSummaryCard";
import { useIsMobile } from "../comman";

const { Content } = Layout;

const data = {
  property: { name: "Juliette House" },
  totalMembers: { count: 45, totalUnits: 5 },
  totalIncidents: { count: 55, newIncidents: 0 },
  totalAlerts: { count: 10, newAlerts: 2 },
};

const Dashboard = () => {
  const isMobile = useIsMobile();

  const propertyCards = [
    {
      title: "Property Name",
      value: data.property.name,
      icon: <HomeOutlined style={{ fontSize: 26, color: "#FFA500" }} />,
      color: "#FFA500",
    },
    {
      title: "Total Members",
      value: data.totalMembers.count,
      extra: `Total Units: ${data.totalMembers.totalUnits}`,
      icon: <UserOutlined style={{ fontSize: 26, color: "#A45EE5" }} />,
      color: "#A45EE5",
    },
    {
      title: "Total Incidents",
      value: data.totalIncidents.count,
      extra: `New Incidents: ${data.totalIncidents.newIncidents}`,
      icon: <FireOutlined style={{ fontSize: 26, color: "#FF4D4F" }} />,
      color: "#FF4D4F",
    },
    {
      title: "Total Alerts",
      value: data.totalAlerts.count,
      extra: `New Alerts: ${data.totalAlerts.newAlerts}`,
      icon: <AlertOutlined style={{ fontSize: 26, color: "#40A9FF" }} />,
      color: "#40A9FF",
    },
  ];

  return (
    <Layout style={{ height: "100%", background: "#f5f5f5", width: "100vw" }}>
      <Content>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {propertyCards.map((card, index) => (
            <PropertyCard key={index} {...card} />
          ))}
        </div>

        <Row gutter={[24, 24]} style={{ marginTop: 20 }}>
          <Col
            xs={24}
            lg={18}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 25,
              }}
            >
              <InvoiceChart />
              <ExpenseCard />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 25,
                marginTop: 20,
              }}
            >
              <MaintenanceRequestList />
              <TransactionHistory />
            </div>
          </Col>

          <Col xs={24} lg={6} style={{ marginLeft: "-50px" }}>
            <h3 style={{ margin: 0, marginBottom: 10 }}>Overview</h3>
            <TaskSummaryCard />
            <h3>My Calendar</h3>
            <CalendarComponent />
            <div style={{ marginTop: 10 }}>
              <FinanceSummary />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
