import React from "react";
import "./trendCard.css";

function TrendCard({ slide }) {
  return (
    <div className="trend-card">
      <img src={slide.previewImg} className="img-fluid" alt="" />

      <div>
        Add to calendar <i className="bi bi-calendar-heart"></i>
      </div>
    </div>
  );
}

export default TrendCard;
