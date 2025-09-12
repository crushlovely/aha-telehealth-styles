"use client";

import React from "react";

const NavCard = ({ links, linkText, content, accent = false }) => (
  <a className={`c-nav-card ${accent ? "accent" : ""}`} href="#">
    <span className="c-nav-card__content">
      <h3 className="c-nav-card__title">Title Goes Here</h3>

      <span className="c-nav-card__description">
        {content === "p" && (
          <p>
            Access cutting-edge research, expert insights, webinars, and
            scientific convening opportunities
          </p>
        )}
        {content === "ul" && (
          <ul>
            <li>
              Test your technology (camera, microphone, internet connection)
            </li>
            <li>Download and test your healthcare providers telehealth app</li>
            <li>Prepare a list of current medications and dosages</li>
            <li>Gather relevant medical documents or test results</li>
            <li>
              Choose a quiet, well-lit, private space for your appointment
            </li>
            <li>Have a pen and paper ready to take notes</li>
          </ul>
        )}
      </span>
    </span>
    {links && <span className="c-nav-card__link">{linkText}</span>}
  </a>
);

export const NavCards = ({
  title = "Need Additional Help?",
  num = 3,
  links = true,
  linkText = "Learn More",
  content = "p",
  withRedBox = false,
  accent = false,
}) => {
  const cardsArray = Array.from({ length: num });

  return (
    <div className={withRedBox ? "c-nav-cards with-red-box" : "c-nav-cards"}>
      <div className="c-nav-cards__container">
        {title && <h2 className="c-nav-cards__title">{title}</h2>}
        <div className="c-nav-cards__list">
          {cardsArray.map((_, index) => (
            <NavCard
              key={index}
              links={links}
              linkText={linkText}
              content={content}
              accent={accent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
