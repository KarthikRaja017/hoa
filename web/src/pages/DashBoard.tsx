import { Layout, Row, Col } from "antd";
import PropertyCard from "./PropertyCard";
import InvoiceChart from "./InvoiceChart";
import {
  HomeOutlined,
  UserOutlined,
  FireOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import CalendarComponent from "../components/CustomCalendar";
import ExpenseCard from "./ExpensesCard";
import MaintenanceRequestList from "./MaintenanceRequest";
import FinanceSummary from "./FinanceSummary";
import TransactionHistory from "./TransactionHistory";
import { useIsMobile } from "../comman";
import TaskSummaryCard from "./TaskSummaryCard";

const data = {
  property: {
    name: "Juliette House",
  },
  totalMembers: {
    count: 45,
    totalUnits: 5,
  },
  totalIncidents: {
    count: 55,
    newIncidents: 0,
  },
  totalAlerts: {
    count: 10,
    newAlerts: 2,
  },
};

const { Content } = Layout;

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <Layout style={{ height: "100%", background: "#f5f5f5", width: "100vw" }}>
      <Content>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <PropertyCard
              title="Property Name"
              value={data.property.name}
              icon={<HomeOutlined style={{ fontSize: 26, color: "#FFA500" }} />}
              color="#FFA500"
            />
          </div>

          <div>
            <PropertyCard
              title="Total Members"
              value={data.totalMembers.count}
              extra={`Total Units: ${data.totalMembers.totalUnits}`}
              icon={<UserOutlined style={{ fontSize: 26, color: "#A45EE5" }} />}
              color="#A45EE5"
            />
          </div>

          <div>
            <PropertyCard
              title="Total Incidents"
              value={data.totalIncidents.count}
              extra={`New Incidents: ${data.totalIncidents.newIncidents}`}
              icon={<FireOutlined style={{ fontSize: 26, color: "#FF4D4F" }} />}
              color="#FF4D4F"
            />
          </div>

          <div>
            <PropertyCard
              title="Total Alerts"
              value={data.totalAlerts.count}
              extra={`New Alerts: ${data.totalAlerts.newAlerts}`}
              icon={
                <AlertOutlined style={{ fontSize: 26, color: "#40A9FF" }} />
              }
              color="#40A9FF"
            />
          </div>
        </div>
        <Row gutter={[24, 24]}>
          <Col
            xs={24}
            lg={18}
            style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
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
                gap: 25,
                marginTop: 20,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <MaintenanceRequestList />
              <TransactionHistory />
            </div>
          </Col>

          <Col xs={24} lg={6} style={{ marginLeft: "-50px" }}>
            <div>
              <h3>Overview</h3>
              <TaskSummaryCard />
            </div>
            <div>
              <h3>My Calendar</h3>
              <CalendarComponent />
            </div>
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
