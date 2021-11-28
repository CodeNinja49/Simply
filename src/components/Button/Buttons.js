import React from "react";

if (process.browser) {
  require("./Buttons.scss");
}

export function PrimaryLinkButton({ onClick, styleName = "", children }) {
  return (
    <button
      type="button"
      class={`button_prime_link ${styleName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ onClick, styleName = "", children }) {
  return (
    <div class={`button_prime ${styleName}`} onClick={onClick}>
      {children}
    </div>
  );
}
