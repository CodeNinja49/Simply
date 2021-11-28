import React from "react";

import Header from "components/header/Header";
import SideBar from "./SideBar";

if (process.browser) {
  require("./Layout.scss");
}

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <div className="d-flex flex-wrap Layout_Body">
        <div className="col-md-3 pr-0">
          <SideBar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </div>
  );
}
