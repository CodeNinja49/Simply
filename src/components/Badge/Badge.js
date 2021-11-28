import React from "react";

if (process.browser) {
  require("./badge.scss");
}

export default function Badge({ children, customStyle = "" }) {
  return <span className={`Badge ${customStyle}`}>{children}</span>;
}
