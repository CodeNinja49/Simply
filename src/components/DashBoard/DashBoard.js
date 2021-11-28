import React from "react";

import Appointments from "components/Appointment/Appointments";
import FollowUps from "components/FollowUps/FollowUps";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

export default function Layout() {
  const modifiers = {
    highlighted: [new Date(2020, 5, 19), new Date(2020, 5, 18)],
  };
  return (
    <div className="row">
      <div className="col-md-8 ">
        <div className="Layout_Events">
          <FollowUps />
        </div>
      </div>
      <div className="col-md-4 pl-0">
        <div className="Layout_Calendar background-white">
          <DayPicker modifiers={modifiers} />
          <Appointments />
        </div>
      </div>
    </div>
  );
}
