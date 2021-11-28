import React, { useState } from "react";
import SvgLoader from "components/svg/SvgLoader";

if (process.browser) {
  require("./header.scss");
}

function Followups({ url, title, subLabel, styleName = "" }) {
  return (
    <div className={`Followups ${styleName}`}>
      <img src={url} alt="" className="Followups_Icon" />
      <div className="Followups_Labels">
        <label className="text-left Followups_Labels--titleSize">{title}</label>
        <label className="Followups_Labels--smallSize">{subLabel}</label>
      </div>
    </div>
  );
}

export default function Header() {
  const [showMore, setShowMore] = useState(false);
  const [checked, setChecked] = useState(false);
  const hideMore = () => {
    setShowMore(!showMore);
  };
  const icon = showMore ? "#arrow-right" : "#arrow-down";
  return (
    <div className="Header_Container ">
      <div className="col-lg-1 col-sm-2">
        <img
          src={require("assets/img/logo.png")}
          alt="logo"
          className="Header_logo"
        />
      </div>
      <div className="col-lg-11 col-sm-10 d-none d-lg-flex">
        <Followups
          title="17"
          subLabel="Active Consultation"
          url={require("assets/img/icon1.png")}
        />
        <div className="d-flex">
          <SvgLoader
            xlinkHref={icon}
            className={showMore ? "Header_rightIcon" : "Header_downIcon"}
            onClick={hideMore}
          />
        </div>
        {showMore ? (
          <div className="d-flex">
            <Followups
              title="4"
              subLabel="New Consultations"
              url={require("assets/img/addedUser.png")}
              styleName="mr-4"
            />
            <Followups
              title="7"
              subLabel="Follow Ups"
              url={require("assets/img/followups.png")}
              styleName="mr-4"
            />
            <Followups
              title="6"
              subLabel="Second Opinion"
              url={require("assets/img/secondOpts.png")}
              styleName="mr-4"
            />
          </div>
        ) : null}

        <div className="d-flex align-items-center ml-auto">
          <label class="switch">
            <input type="checkbox" id="togBtn" />
            <div class="slider round">
              <span class="on">Offline</span>
              <span class="off">Online</span>
            </div>
          </label>
          <label className="Header_Container_labelColor">
            Chandigarh, India
          </label>
          <div className="circle-centered">
            <SvgLoader xlinkHref="#search" className="Header_searchIcon" />
          </div>
          <div className="circle-centered">
            <SvgLoader
              xlinkHref="#notification-bell"
              className="Header_bellIcon"
            />
          </div>
          <div className="circle-centered">
            <SvgLoader xlinkHref="#user-avatar" className="Header_avatarIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
