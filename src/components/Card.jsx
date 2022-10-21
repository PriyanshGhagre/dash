import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="mt-2">
      <div className="e-card" id="basic">
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-title">{title}</div>
          </div>
        </div>
        <div className="e-card-content">{content}</div>
      </div>
    </div>
  );
};

export default Card;
