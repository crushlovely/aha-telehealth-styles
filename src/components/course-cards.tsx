"use client";

import React from "react";

interface CourseCard {
  featured?: boolean;
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

interface CourseCardsProps {
  title?: string;
  titleIcon?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  courses: CourseCard[];
}

const CourseCardItem: React.FC<{ course: CourseCard }> = ({ course }) => (
  <div
    className={
      `c-course-card` + (course.featured ? " c-course-card--featured" : "")
    }
  >
    <div className="c-course-card__header">
      {course.thumbnail && <img src={course.thumbnail} alt={course.title} />}
      {course.label && (
        <div className="c-course-card__label">{course.label}</div>
      )}
    </div>
    <div className="c-course-card__content">
      {course.featured && (
        <div className="c-course-card__featured-label">Featured</div>
      )}
      <h3 className="c-course-card__title">{course.title}</h3>
      {course.description && (
        <div className="c-course-card__description">{course.description}</div>
      )}
      <div className="c-course-card__meta">
        {course.duration && (
          <span className="c-course-card__meta-item icn-duration">
            {course.duration}
          </span>
        )}
        {course.price && (
          <span className="c-course-card__meta-item icn-price">
            {course.price}
          </span>
        )}
        {course.credits && (
          <span className="c-course-card__meta-item icn-credits">
            {course.credits}
          </span>
        )}
        {course.date && (
          <span className="c-course-card__meta-item icn-calendar">
            {course.date}
          </span>
        )}
        {course.person && (
          <span className="c-course-card__meta-item icn-person">
            {course.person}
          </span>
        )}
      </div>
      <div className="c-course-card__secondary">
        {course.secondaryTitle && (
          <h4 className="c-course-card__secondary-title">
            {course.secondaryTitle}
          </h4>
        )}
        {course.secondaryDescription && (
          <div className="c-course-card__secondary-description">
            <div
              dangerouslySetInnerHTML={{ __html: course.secondaryDescription }}
            />
          </div>
        )}
        {course.secondaryCtaText && course.secondaryCtaUrl && (
          <a
            href={course.secondaryCtaUrl}
            className="c-course-card__secondary-cta"
          >
            {course.secondaryCtaText}
          </a>
        )}
      </div>
    </div>
    <div className="c-course-card__ctas">
      <a href={course.ctaUrl} className="c-course-card__cta">
        {course.ctaText}
      </a>
      {course.cta2Text && course.cta2Url && (
        <a href={course.cta2Url} className="c-course-card__cta">
          {course.cta2Text}
        </a>
      )}
    </div>
  </div>
);

export const CourseCards: React.FC<CourseCardsProps> = ({
  title,
  titleIcon,
  description,
  ctaText,
  ctaUrl,
  courses,
}) => (
  <div className="c-course-cards">
    <div className="container">
      {(title || description || (ctaText && ctaUrl)) && (
        <div className="c-course-cards__header">
          {title && (
            <h2 className="c-course-cards__title">
              {titleIcon && (
                <img
                  src={titleIcon}
                  alt=""
                  className="c-course-cards__title-icon"
                />
              )}
              {title}
            </h2>
          )}
          {description && (
            <p className="c-course-cards__description">{description}</p>
          )}
        </div>
      )}
      <div className="c-course-cards__grid">
        {courses.map((course, index) => (
          <CourseCardItem key={index} course={course} />
        ))}
      </div>

      {ctaText && ctaUrl && (
        <div className="c-course-cards__cta">
          <a href={ctaUrl} className="btn">
            {ctaText}
          </a>
        </div>
      )}
    </div>
  </div>
);
