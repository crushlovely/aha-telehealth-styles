"use client";

import React from "react";

const Profile = ({ profile }) => (
  <div className="c-profile">
    <div className="c-profile__container">
      <div className="c-profile__image">
        <img src={profile.image} alt={profile.name} />
      </div>
      <div className="c-profile__header">
        <h2 className="c-profile__name">{profile.name}</h2>
        {profile.title && (
          <div className="c-profile__meta icn-person">{profile.title}</div>
        )}
        {profile.location && (
          <div className="c-profile__meta icn-calendar">{profile.location}</div>
        )}
      </div>
      <div className="c-profile__main">
        {profile.tags && profile.tags.length > 0 && (
          <ul className="c-profile__tags">
            {profile.tags.map((tag, index) => (
              <li key={index}>
                <span className="c-profile__tag">{tag}</span>
              </li>
            ))}
          </ul>
        )}
        {profile.description && (
          <p className="c-profile__description">{profile.description}</p>
        )}
      </div>
    </div>
  </div>
);

export const Profiles = ({ title = "", description = "", profiles }) => (
  <div className="c-profiles">
    {(title || description) && (
      <div className="c-profiles__header container">
        {title && <h2 className="c-profiles__title">{title}</h2>}
        {description && (
          <p className="c-profiles__description">{description}</p>
        )}
      </div>
    )}
    <div className="c-profiles__list">
      {profiles.map((profile, index) => (
        <Profile key={index} profile={profile} />
      ))}
    </div>
  </div>
);
