import React from "react";

interface PHDSectionHeadingProps {
  title?: string;
  body?: string;
}

export const PHDSectionHeading = ({ title, body }: PHDSectionHeadingProps) => (
  <div className="section-heading">
    <div className="container section-heading__container">
      <div className="row">
        <div className="col-12 section-heading__title">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 section-heading__by-line">
          <p>{body}</p>
        </div>
      </div>
    </div>
  </div>
);
