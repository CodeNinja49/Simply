import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";

if (process.browser) {
  require("./Calendar.scss");
}

export default function Calendar() {
  const dayCellHeader = (args) => {
    const { date } = args;
    return (
      <div className="d-flex flex-column">
        <span className="day-cell-name">{moment(date).format("ddd")}</span>
        <span className="day-cell-number">{moment(date).format("D")}</span>
      </div>
    );
  };
  return (
    <div className="Calendar">
      <div className="Calendar_container">
        <FullCalendar
          dayCellContent={dayCellHeader}
          dayCellClassNames="Calendar_container_view_dayCell"
          viewClassNames="Calendar_container_view"
          plugins={[dayGridPlugin]}
          fixedWeekCount={false}
          showNonCurrentDates={false}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          dayHeaders={false}
          initialView="dayGridMonth"
          dayMaxEvents={true}
          dayMaxEventRows={2}
          events={[
            { title: 'event 1', date: '2020-06-01' },
            { title: 'event 2', date: '2020-06-02' },
            { title: 'event 3', date: '2020-06-02' },
            { title: 'event 4', date: '2020-06-02' }
          ]}
        />
      </div>
    </div>
  );
}
