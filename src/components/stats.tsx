"use client";

import React from "react";

interface StatItem {
  number: string;
  description: string;
}

interface StatsProps {
  title?: string;
  description?: string;
  stat1: StatItem;
  stat2: StatItem;
  stat3: StatItem;
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({
  title,
  description,
  stat1,
  stat2,
  stat3,
  className = "",
}) => (
  <div className={`c-stats ${className}`}>
    <div className="container">
      {(title || description) && (
        <div className="c-stats__header">
          {title && <h2 className="c-stats__title">{title}</h2>}
          {description && <p className="c-stats__description">{description}</p>}
        </div>
      )}
      <div className="c-stats__list-label">Statistics</div>
      <div className="c-stats__list">
        <div className="c-stats__item">
          <div className="c-stats__number">{stat1.number}</div>
          <div className="c-stats__text">{stat1.description}</div>
        </div>
        <div className="c-stats__item">
          <div className="c-stats__number">{stat2.number}</div>
          <div className="c-stats__text">{stat2.description}</div>
        </div>
        <div className="c-stats__item">
          <div className="c-stats__number">{stat3.number}</div>
          <div className="c-stats__text">{stat3.description}</div>
        </div>
      </div>
    </div>
  </div>
);
