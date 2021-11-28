import React, { useState } from "react";

import SvgLoader from "components/svg/SvgLoader";
import Badge from "components/Badge/Badge";
import { useAuth0 } from "../../react-auth0-spa";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const { logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <div className="SideBar">
      <div className="d-flex justify-content-between align-items-center">
        <div className="Layout_Profile">
          <div class="Layout_Profile_Img">
            <img
              src="https://img.icons8.com/officel/80/000000/circled-user-male-skin-type-6.png"
              alt="img"
            />
          </div>
          <div className="d-flex flex-column Layout_Profile_details">
            <label className="Layout_Profile_title">Good Morning,</label>
            <label className="Layout_Profile_name">Dr. Mohan</label>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-primary btn-sm bg-color">
            Profile
          </button>
        </div>
      </div>
      <hr />
      <div>
        <NavLink
          to="/"
          exact
          activeClassName="SideBar_listItem--active"
          className="SideBar_listItem"
        >
          <SvgLoader xlinkHref="#grid-icon" className="Layout_gridIcon" />
          <span>Doc View</span>
        </NavLink>
        <div className={`SideBar_listItem`}>
          <SvgLoader xlinkHref="#pie-chart" className="Layout_gridIcon" />
          <span>My Patients</span>
        </div>
        <NavLink
          to="/calendar"
          exact
          activeClassName="SideBar_listItem--active"
          className="SideBar_listItem"
        >
          <SvgLoader xlinkHref="#calendar" className="Layout_gridIcon" />
          <span>Calendar</span>
        </NavLink>
        <div className={`SideBar_listItem`}>
          <SvgLoader xlinkHref="#message" className="Layout_msgIcon" />
          <span>My Messages - Beta</span>
          <Badge customStyle="SideBar_listItem_badge">8</Badge>
        </div>
      </div>
      <div className="SideBar_bottom">
        <hr />
        <div className="SideBar_listItem" onClick={logoutWithRedirect}>
          <SvgLoader xlinkHref="#logout" className="Layout_msgIcon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
