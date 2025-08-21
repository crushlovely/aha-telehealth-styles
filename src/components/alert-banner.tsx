"use client";

import React from "react";

interface AlertBannerProps {
  icon?: string;
  label?: string;
  text: string;
  ctaUrl: string;
  ctaText: string;
  theme?: "black" | "red";
  className?: string;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({
  icon,
  label,
  text,
  ctaUrl,
  ctaText,
  theme = "black",
  className = "",
}) => {
  return (
    <a
      href={ctaUrl}
      className={`c-alert-banner c-alert-banner--${theme} ${className}`}
    >
      <span className="container">
        <span className="c-alert-banner__content body-lg">
          <span className="c-alert-banner__labels">
            {icon && (
              <span className="c-alert-banner__icon">
                <img src={icon} alt="" />
              </span>
            )}
            {label && <b className="c-alert-banner__label">{label}</b>}
          </span>
          <span className="c-alert-banner__message ">{text}</span>
        </span>
        <span className="c-alert-banner__cta c-cta">{ctaText}</span>
      </span>
    </a>
  );
};
