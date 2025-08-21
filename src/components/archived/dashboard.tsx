export const Dashboard = () => (
  <div className="c-dashboard">
    <div className="c-dashboard__message">
      Congratulations on unlocking exclusive well-being content.
      <button
        className="c-dashboard__message__close"
        aria-label="close"
      ></button>
    </div>
    <div className="c-dashboard__hero">
      <p className="c-dashboard__hero__eyebrow">
        Well-being Works Better™ Dashboard
      </p>
      <h1 className="c-dashboard__hero__title">
        Welcome to Well-Being Works Better!
      </h1>
      <p className="c-dashboard__hero__body">
        Lorem ipsum dolor sit amet consectetur. Sapien lectus iaculis augue
        porttitor etiam non.
      </p>
    </div>
    <div className="c-dashboard__cols">
      <div className="c-dashboard__col__side">
        <div className="c-dashboard__card">
          <h2 className="c-dashboard__card__title">Scorecard Progress</h2>
          <h3 className="c-dashboard__card__heading">You havent started yet</h3>
          <p className="c-dashboard__card__body">
            Lorem ipsum dolor sit amet consectetur. Sapien lectus iaculis augue
            porttitor etiam non.
          </p>
          <a href="#" className="c-dashboard__card__cta">
            Start Scorecard
          </a>
        </div>
        <div className="c-dashboard__card">
          <h2 className="c-dashboard__card__title">Scorecard Progress</h2>
          <h3 className="c-dashboard__card__heading">
            Youre making progress and completed 32 of 139 questions
          </h3>
          <div className="c-dashboard__card__progress">
            <div className="c-dashboard__card__progress__bar">
              <div
                className="c-dashboard__card__progress__bar__meter"
                style={{ width: "23%" }}
              ></div>
            </div>
            <span className="c-dashboard__card__progress__bar__label">0</span>
            <span className="c-dashboard__card__progress__bar__label">139</span>
          </div>
          <a href="#" className="c-dashboard__card__cta">
            Go Complete
          </a>
        </div>

        <div className="c-dashboard__card c-dashboard__card--logo-bg">
          <h2 className="c-dashboard__card__title">Scorecard Progress</h2>
          <img
            className="c-dashboard__card__badge"
            src="images/scorecard-badge.png"
            alt="Gold Badge"
          />
          <h3 className="c-dashboard__card__heading">
            Congrats! Youve earned Gold
          </h3>
          <p className="c-dashboard__card__body">
            Congratulations on completing the Well-being Works Better Scorecard!
          </p>
          <h4 className="c-dashboard__card__share-heading">
            Share your badge on social media
          </h4>
          <ul className="c-dashboard__card__share-links">
            <li>
              <a href="#TBD" className="share-link--x">
                <span>Share on X</span>
              </a>
            </li>
            <li>
              <a href="#TBD" className="share-link--facebook">
                <span>Share on Facebook</span>
              </a>
            </li>
            <li>
              <a href="#TBD" className="share-link--linkedin">
                <span>Share on LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="c-dashboard__card">
          <h2 className="c-dashboard__card__title">Benchmark Report</h2>
          <h2 className="c-dashboard__card__heading c-dashboard__card__heading--chart">
            Access your Benchmark Report
          </h2>
          <p className="c-dashboard__card__body">
            New insights are available for the Scorecard
          </p>
          <a href="#" className="c-dashboard__card__cta">
            Download
          </a>
        </div>
      </div>
      <div className="c-dashboard__col__main">
        <div className="c-dashboard__card">
          <h2 className="c-dashboard__card__title">
            Search for an event near you!
          </h2>
          {/* <h3 className="c-dashboard__card__heading">
            Lorem ipsum dolor sit amet consectetur.
          </h3> */}
          <p className="c-dashboard__card__body">
            Let’s get moving! Check below to see if there’s a Heart Walk, Cycle
            Nation, or Field Day happening in your local area!
          </p>
          <form className="c-dashboard__card__form">
            <div className="c-dashboard__card__form__group">
              <div className="c-dashboard__card__form__field">
                <label htmlFor="heart-challenge-distance">Distance</label>
                <div className="input-wrapper input-wrapper--select">
                  <select
                    id="heart-challenge-distance"
                    name="heart-challenge-distance"
                  >
                    <option value="1">1 mile</option>
                    <option value="2">2 miles</option>
                    <option value="3">3 miles</option>
                  </select>
                </div>
              </div>

              <div className="c-dashboard__card__form__field">
                <label htmlFor="heart-challenge-zip">Zip Code</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    max={5}
                    id="heart-challenge-zip"
                    name="heart-challenge-zip"
                  />
                </div>
              </div>

              <div className="c-dashboard__card__form__field">
                <label htmlFor="heart-challenge-state">State</label>
                <div className="input-wrapper input-wrapper--select">
                  <select
                    id="heart-challenge-state"
                    name="heart-challenge-state"
                  >
                    <option value="alabama">Alabama</option>
                    <option value="alaska">Alaska</option>
                    <option value="arizona">Arizona</option>
                    <option value="arkansas">Arkansas</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="c-dashboard__card__form__action">
              <button type="submit" className="c-dashboard__card__cta">
                Search For Events
              </button>
            </div>
          </form>

          <div className="c-dashboard__card__events">
            <div className="c-dashboard__card__no-events">
              <h3>There are no upcoming events in your area at this time</h3>
            </div>
          </div>

          <div className="c-dashboard__card__events">
            <div className="c-dashboard__card__events-grid events-grid">
              <div className="event-card">
                <div className="event-card__header">
                  <img
                    className="event-card__image"
                    src="/images/event-card-1.jpg"
                    alt="alt here"
                  />
                  <div className="event-card__date">
                    <span>SEPT</span> 22
                  </div>
                </div>
                <div className="event-card__body">
                  <div className="event-card__info">
                    <h3>2024 Long Island Heart Walk</h3>
                    <p>Sunday, September 22, 2024</p>
                  </div>

                  <a href="#" className="event-card__cta">
                    More Details
                  </a>
                </div>
              </div>
              <div className="event-card">
                <div className="event-card__header">
                  <img
                    className="event-card__image"
                    src="/images/event-card-2.jpg"
                    alt="alt here"
                  />
                  <div className="event-card__date">
                    <span>SEPT</span> 18
                  </div>
                </div>
                <div className="event-card__body">
                  <div className="event-card__info">
                    <h3>2024 Middletown/Bedminster AT&T Heart Walk</h3>
                    <p>Sunday, September 18, 2024</p>
                  </div>

                  <a href="#" className="event-card__cta">
                    More Details
                  </a>
                </div>
              </div>
              <div className="event-card">
                <div className="event-card__header">
                  <img
                    className="event-card__image"
                    src="/images/event-card-3.jpg"
                    alt="alt here"
                  />
                  <div className="event-card__date">
                    <span>SEPT</span> 22
                  </div>
                </div>
                <div className="event-card__body">
                  <div className="event-card__info">
                    <h3>2024 Long Island Heart Walk</h3>
                    <p>Sunday, September 22, 2024</p>
                  </div>

                  <a href="#" className="event-card__cta">
                    More Details
                  </a>
                </div>
              </div>
              <div className="event-card">
                <div className="event-card__header">
                  <img
                    className="event-card__image"
                    src="/images/event-card-4.jpg"
                    alt="alt here"
                  />
                  <div className="event-card__date">
                    <span>SEPT</span> 22
                  </div>
                </div>
                <div className="event-card__body">
                  <div className="event-card__info">
                    <h3>2024 Long Island Heart Walk</h3>
                    <p>Sunday, September 22, 2024</p>
                  </div>

                  <a href="#" className="event-card__cta">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="c-dashboard__card__events-cta">
              <a href="/events" className="c-dashboard__card__events-cta">
                View More Events
              </a>
            </div>
          </div>
        </div>
        <div className="c-dashboard__card c-dashboard__card--feature">
          <h2 className="c-dashboard__card__title">Nation of Lifesavers</h2>
          <p className="c-dashboard__card__body">
            The American Heart Association’s goal is to create a Nation of
            Lifesavers and double the out of hospital cardiac arrest survival
            rate by 2030. To do this, AHA is equipping everyday people with the
            knowledge and skills of CPR, changing them from bystanders to
            lifesavers.
          </p>
          <button className="c-dashboard__card__cta">
            Visit Nation of Lifesavers To Find Out How To Support This Effort
          </button>
        </div>
      </div>
    </div>
    <div className="c-dashboard__full">
      <div className="c-dashboard__card">
        <h2 className="c-dashboard__card__title">Scorecard At A Glance</h2>
        <h3 className="c-dashboard__card__heading">Header Goes Here</h3>
        <p className="c-dashboard__card__body">
          Lorem ipsum dolor sit amet consectetur. Sapien lectus iaculis augue
          porttitor etiam non. Lorem ipsum dolor sit amet consectetur. Sapien
          lectus iaculis augue porttitor etiam non.
        </p>
        <div className="c-dashboard__card__glance-wrapper">
          <div className="c-dashboard__card__glance">
            <div className="c-dashboard__card__glance__item">
              <h4 className="c-dashboard__card__glance__title">Your Score</h4>
              <div className="c-dashboard__card__glance__score-wrapper">
                <p className="c-dashboard__card__glance__score">
                  <strong>193</strong> out of 230
                </p>
              </div>
              <a href="#" className="c-dashboard__card__cta">
                View Full Benchmark Report
              </a>
              <p className="c-dashboard__card__body">
                Your full benchmark report includes a breakdown by section and
                more benchmark comparisons.
              </p>
            </div>
            <div className="c-dashboard__card__glance__item excelling">
              <h4 className="c-dashboard__card__glance__title">
                All Companies
              </h4>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div
                  className="c-dashboard__card__glance__pie-chart"
                  style={{ ["--pie-percentage" as any]: 75 }}
                ></div>
                <p className="c-dashboard__card__glance__score">
                  <strong>168</strong> out of 230
                </p>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item excelling">
              <h4 className="c-dashboard__card__glance__title">
                Your Industry
              </h4>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div
                  className="c-dashboard__card__glance__pie-chart"
                  style={{ ["--pie-percentage" as any]: 75 }}
                ></div>
                <p className="c-dashboard__card__glance__score">
                  <strong>168</strong> out of 230
                </p>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item developing">
              <h4 className="c-dashboard__card__glance__title">
                Your Company Size
              </h4>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div
                  className="c-dashboard__card__glance__pie-chart"
                  style={{ ["--pie-percentage" as any]: 75 }}
                ></div>
                <p className="c-dashboard__card__glance__score">
                  <strong>168</strong> out of 230
                </p>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item developing">
              <h4 className="c-dashboard__card__glance__title">
                Your Revenue Range
              </h4>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div
                  className="c-dashboard__card__glance__pie-chart"
                  style={{ ["--pie-percentage" as any]: 75 }}
                ></div>
                <p className="c-dashboard__card__glance__score">
                  <strong>168</strong> out of 230
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-dashboard__card">
        <h2 className="c-dashboard__card__title">Scorecard At A Glance</h2>
        <h3 className="c-dashboard__card__heading">Header Goes Here</h3>
        <p className="c-dashboard__card__body">
          Lorem ipsum dolor sit amet consectetur. Sapien lectus iaculis augue
          porttitor etiam non. Lorem ipsum dolor sit amet consectetur. Sapien
          lectus iaculis augue porttitor etiam non.
        </p>
        <div className="c-dashboard__card__glance-wrapper">
          <div className="c-dashboard__card__popup">
            <h2 className="c-dashboard__card__popup__title">
              You have not completed your Scorecard yet, please complete and
              your scores will appear here.
            </h2>
            <a href="#" className="c-dashboard__card__cta">
              Complete Scorecard
            </a>
            <div className="c-dashboard__card__popup__footer">
              <p>
                If you’re having issues accessing or completing your scorecard,
                click <a href="mailto:workforce@heart.org">here</a> to contact
                support
              </p>
            </div>
          </div>
          <div className="c-dashboard__card__glance skeleton">
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
              <span className="c-dashboard__card__cta skeleton"></span>
              <span className="c-dashboard__card__body skeleton"></span>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-dashboard__card">
        <h2 className="c-dashboard__card__title">Scorecard At A Glance</h2>
        <h3 className="c-dashboard__card__heading">Header Goes Here</h3>
        <p className="c-dashboard__card__body">
          Lorem ipsum dolor sit amet consectetur. Sapien lectus iaculis augue
          porttitor etiam non. Lorem ipsum dolor sit amet consectetur. Sapien
          lectus iaculis augue porttitor etiam non.
        </p>
        <div className="c-dashboard__card__glance-wrapper">
          <div className="c-dashboard__card__popup">
            <h2 className="c-dashboard__card__popup__title">
              Your Scorecard data is processing and will appear here soon.
            </h2>
          </div>
          <div className="c-dashboard__card__glance skeleton">
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
              <span className="c-dashboard__card__cta skeleton"></span>
              <span className="c-dashboard__card__body skeleton"></span>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
            <div className="c-dashboard__card__glance__item">
              <span className="c-dashboard__card__glance__title skeleton"></span>
              <div className="c-dashboard__card__glance__score-wrapper">
                <div className="c-dashboard__card__glance__pie-chart skeleton"></div>
                <span className="c-dashboard__card__glance__score skeleton"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
