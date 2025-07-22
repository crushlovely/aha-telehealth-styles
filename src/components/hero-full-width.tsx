import React from "react";

interface HeroFullWidthProps {
  theme?: string;
  image?: string;
  overline?: string;
  title?: string;
  body?: string;
  button1?: string;
  button2?: string;
}

/*
Themes:
red
red-alt
yellow-orange
gray-dark
gray
white
black
aqua
aqua-alt
orange
orange-alt
green-light
green
*/

// function for HeroFullWidth using props
export const HeroFullWidth = ({
  theme,
  image,
  overline,
  title,
  body,
  button1,
  button2,
}: HeroFullWidthProps) => (
  <div className="l-section">
    <div className={`c-hero-full h-theme--${theme}`}>
      {image && (
        <div className="c-hero-full__media h-placeholder-image h-placeholder-image--bg">
          <img
            src={image}
            alt=""
            data-lazy-img-loading={image}
            className="is-loaded"
          />
        </div>
      )}
      <div className="c-hero-full__content-container container container-fluid">
        <p className="c-hero-full__kicker">
          <img
            src="https://placehold.co/30.jpg"
            alt=""
            className="c-hero-card__kicker-icon"
          />
          {/* {overline} */}
        </p>
        <div className="c-hero-full__content">
          <h2 className="c-hero-full__heading h2">
            <em>{overline}</em>
            {title}
          </h2>
          {body && <p className="c-hero-full__subheading">{body}</p>}
          <div className="d-md-flex c-hero-card__btn-side-by-side">
            {button1 && (
              <a href="#" className="btn btn-round btn-primary col">
                {button1}
              </a>
            )}
            {button2 && (
              <a href="#" className="btn btn-round btn-outline-primary col">
                {button2}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
