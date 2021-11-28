import React, { useState } from "react";

import Badge from "components/Badge/Badge";
import SvgLoader from "components/svg/SvgLoader";

if (process.browser) {
  require("./Appointments.scss");
}

function AppointmentsItem({ name, description, time }) {
  const [showBtn, hideBtn] = useState(false);
  const showButtons = () => {
    hideBtn(true);
  };
  const hideButtons = () => {
    hideBtn(false);
  };
  return (
    <div
      className="Appointments_List-item"
      onMouseEnter={showButtons}
      onMouseLeave={hideButtons}
    >
      <div className="Appointments_List-item--img">
        <img
          src="https://img.icons8.com/cotton/64/000000/gender-neutral-user--v3.png"
          alt="profile"
        />
        <div className="d-flex flex-column marginLeft">
          <span className="Appointments_List-name">{name}</span>
          <span className="Appointments_List-description">{description}</span>
        </div>
      </div>
      <div className={`d-flex ${!showBtn ? "flex-column" : ""}`}>
        {showBtn ? (
          <span className="fadeInAnimation">
            <SvgLoader
              xlinkHref="#acceptTick"
              className="Appointments_accept"
            />
            <SvgLoader xlinkHref="#cancel" className="Appointments_cancel" />
          </span>
        ) : (
          <>
            <span className="Appointments_List-scheduled">Scheduled</span>
            <span className="Appointments_List-time">{time}</span>
          </>
        )}
      </div>
    </div>
  );
}
export default function Appointments() {
  return (
    <div className="Appointments">
      <div className="Appointments-header">
        <span className="Appointments_title">Appointements</span>
        <Badge customStyle="Appointments_count">3</Badge>
      </div>
      <div className="Appointments_List">
        <AppointmentsItem
          name="Himanshu Singh, 32"
          description="Sore throat"
          time="06.00 PM"
        />
        <AppointmentsItem
          name="Rahul Kumar, 22"
          description="Fever, throat"
          time="03.00 PM"
        />
        <AppointmentsItem
          name="Gopal, 28"
          description="Sore throat"
          time="02.00 PM"
        />
      </div>
    </div>
  );
}
