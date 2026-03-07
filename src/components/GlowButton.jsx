import React from "react";
import "./glowButton.css";

export default function GlowButton() {
  return (
    <div
      className="glowing-box glowing-box-active"
      style={{ "--animation-speed": "2s" }}
    >
      <div className="glowing-box-animations">
        <div className="glowing-box-glow"></div>

        <div className="glowing-box-stars-masker">
          <div className="glowing-box-stars"></div>
        </div>
      </div>

      <div className="glowing-box-borders-masker">
        <div className="glowing-box-borders"></div>
      </div>

      <button className="glowing-box-button">
        <span className="glowing-span">Request Invitation</span>
      </button>
    </div>
  );
}