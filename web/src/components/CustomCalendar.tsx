import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  margin-top: 20px;

  .fc {
    background: #fff;
    border-radius: 10px;
  }

  .fc-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .fc-toolbar-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  .fc-button {
    background: #567bff !important;
    border: none !important;
    color: white !important;
    border-radius: 6px !important;
    padding: 5px 10px !important;
    font-size: 12px !important;
  }

  .fc-button:hover {
    background: #405de6 !important;
  }

  .fc-daygrid-day-frame {
    min-height: 40px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .fc-daygrid-day-number {
    display: block !important;
    text-align: center;
    position: relative;
    z-index: 2;
    font-size: 14px;
    color: #333;
  }

  .fc-daygrid-day:hover {
    background: rgba(86, 123, 255, 0.1) !important;
  }

  .fc-daygrid-day.fc-day-today {
    background: rgba(86, 123, 255, 0.2) !important;
  }
    .highlighted-day {
    background: #567bff !important;
    }

  .highlighted-day .fc-daygrid-day-number {
    color: white !important;
    font-weight: bold;
    position: relative;
    z-index: 2;.
  }
`;

const CalendarComponent = () => {
  return (
    <CalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        selectable={true}
        height="auto"
        dayCellClassNames={({ date }) => {
          const highlightedDates = [
            "2025-03-04",
            "2025-03-06",
            "2025-03-07",
            "2025-03-10",
          ];
          return highlightedDates.includes(date.toISOString().split("T")[0])
            ? "highlighted-day"
            : "";
        }}
      />
    </CalendarWrapper>
  );
};

export default CalendarComponent;
