"use client";

import React from "react";

interface ResourceCard {
  featured?: boolean;
  accent?: boolean;
  thumbnail?: string;
  label?: string;
  title: string;
  description?: string;
  duration?: string;
  credits?: string;
  price?: string;
  date?: string;
  person?: string;
  secondaryTitle?: string;
  secondaryDescription?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  ctaText: string;
  ctaUrl: string;
  cta2Text?: string;
  cta2Url?: string;
}

interface ResourceCardsProps {
  title?: string;
  titleIcon?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  resources: ResourceCard[];
  filters?: string[];
}

const ResourceCardItem: React.FC<{ resource: ResourceCard }> = ({
  resource,
}) => (
  <div
    className={
      `c-resource-card` +
      (resource.featured ? " featured" : "") +
      (resource.accent ? " accent" : "")
    }
  >
    <div className="c-resource-card__header">
      {resource.thumbnail && (
        <img src={resource.thumbnail} alt={resource.title} />
      )}
      {resource.label && (
        <div className="c-resource-card__label">{resource.label}</div>
      )}
    </div>
    <div className="c-resource-card__content">
      {resource.featured && (
        <div className="c-resource-card__featured-label">Featured</div>
      )}
      <h3 className="c-resource-card__title">{resource.title}</h3>
      {resource.description && (
        <div className="c-resource-card__description">
          {resource.description}
        </div>
      )}
      <div className="c-resource-card__meta">
        {resource.duration && (
          <span className="c-resource-card__meta-item icn-duration">
            {resource.duration}
          </span>
        )}
        {resource.price && (
          <span className="c-resource-card__meta-item icn-price">
            {resource.price}
          </span>
        )}
        {resource.credits && (
          <span className="c-resource-card__meta-item icn-credits">
            {resource.credits}
          </span>
        )}
        {resource.date && (
          <span className="c-resource-card__meta-item icn-calendar">
            {resource.date}
          </span>
        )}
        {resource.person && (
          <span className="c-resource-card__meta-item icn-person">
            {resource.person}
          </span>
        )}
      </div>
      <div className="c-resource-card__secondary">
        {resource.secondaryTitle && (
          <h4 className="c-resource-card__secondary-title">
            {resource.secondaryTitle}
          </h4>
        )}
        {resource.secondaryDescription && (
          <div className="c-resource-card__secondary-description">
            <div
              dangerouslySetInnerHTML={{
                __html: resource.secondaryDescription,
              }}
            />
          </div>
        )}
        {resource.secondaryCtaText && resource.secondaryCtaUrl && (
          <a
            href={resource.secondaryCtaUrl}
            className="c-resource-card__secondary-cta"
          >
            {resource.secondaryCtaText}
          </a>
        )}
      </div>
    </div>
    <div className="c-resource-card__ctas">
      <a href={resource.ctaUrl} className="c-resource-card__cta">
        {resource.ctaText}
      </a>
      {resource.cta2Text && resource.cta2Url && (
        <a href={resource.cta2Url} className="c-resource-card__cta">
          {resource.cta2Text}
        </a>
      )}
    </div>
  </div>
);

export const ResourceCards: React.FC<ResourceCardsProps> = ({
  title,
  titleIcon,
  description,
  ctaText,
  ctaUrl,
  filters,
  resources,
}) => (
  <div className="c-resource-cards">
    <div className="container">
      {(title || description) && (
        <div className="c-resource-cards__header">
          {title && (
            <h2 className="c-resource-cards__title">
              {titleIcon && (
                <img
                  src={titleIcon}
                  alt=""
                  className="c-resource-cards__title-icon"
                />
              )}
              {title}
            </h2>
          )}
          {description && (
            <p className="c-resource-cards__description">{description}</p>
          )}
        </div>
      )}
      {filters && filters.length > 0 && (
        <ul className="c-resource-cards__filters">
          {filters.map((filter, index) => (
            <li key={index}>
              <button className="c-resource-cards__filter">{filter}</button>
            </li>
          ))}
        </ul>
      )}
      <div className="c-resource-cards__grid">
        {resources.map((resource, index) => (
          <ResourceCardItem key={index} resource={resource} />
        ))}
      </div>

      {ctaText && ctaUrl && (
        <div className="c-resource-cards__cta">
          {filters && filters.length > 0 && (
            <span className="c-resource-cards__count">Showing 00 of 100</span>
          )}
          <a href={ctaUrl} className="btn">
            {ctaText}
          </a>
        </div>
      )}
    </div>
  </div>
);
