"use client";

import React from "react";

interface CourseCard {
  featured?: boolean;
  thumbnail: string;
  label?: string;
  title: string;
  description: string;
  duration?: string;
  credits?: string;
  date?: string;
  person?: string;
  ctaText: string;
  ctaUrl: string;
}

interface CourseCardsProps {
  title?: string;
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
    <div className="c-course-card__thumbnail">
      <img src={course.thumbnail} alt={course.title} />
      {course.label && (
        <div className="c-course-card__label">{course.label}</div>
      )}
    </div>
    <div className="c-course-card__content">
      {course.featured && (
        <div className="c-course-card__featured-label">Featured</div>
      )}
      <h3 className="c-course-card__title">{course.title}</h3>
      <p className="c-course-card__description">{course.description}</p>

      <div className="c-course-card__meta">
        {course.duration && (
          <span className="c-course-card__meta-item icn-duration">
            {course.duration}
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
    </div>
    <div className="c-course-card__ctas">
      <a href={course.ctaUrl} className="c-course-card__cta">
        {course.ctaText}
      </a>
    </div>
  </div>
);

export const CourseCards: React.FC<CourseCardsProps> = ({
  title,
  description,
  ctaText,
  ctaUrl,
  courses,
}) => (
  <div className="c-course-cards">
    <div className="container">
      {(title || description || (ctaText && ctaUrl)) && (
        <div className="c-course-cards__header">
          {title && <h2 className="c-course-cards__title">{title}</h2>}
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
