export const SolutionsDashboard = ({ widgets = true }) => (
  <div className="c-solutions-dashboard">
    <div className="c-solutions-dashboard__container">
      <div className="c-solutions-dashboard__widgets-container">
        {widgets && (
          <>
            <h3 className="c-solutions-dashboard__widget-heading">Get Help</h3>
            <div className="c-solutions-dashboard__widget c-solutions-dashboard__widget--red">
              <div className="c-solutions-dashboard__widget-content c-solutions-dashboard__help-content">
                <p className="c-solutions-dashboard__title">
                  Our customer support team is happy to assist you
                </p>
              </div>
              <div className="c-solutions-dashboard__contact-info">
                <a
                  href="mailto:workforce@heart.org"
                  className="c-solutions-dashboard__help-link c-solutions-dashboard__email"
                >
                  workforce@heart.org
                </a>
                <a
                  href="tel:555-555-5555"
                  className="c-solutions-dashboard__help-link c-solutions-dashboard__phone"
                >
                  555-555-5555
                </a>
              </div>
            </div>
            <h3 className="c-solutions-dashboard__widget-heading">
              Two windows Annually
            </h3>
            <div className="c-solutions-dashboard__widget">
              <div className="c-solutions-dashboard__widget-content">
                <p className="c-solutions-dashboard__title">
                  Your company has two opportunities each year to complete the
                  Scorecard:
                </p>
                <div className="c-solutions-dashboard__events-container">
                  <div className="c-solutions-dashboard__event">
                    <div className="c-solutions-dashboard__event-dates">
                      <div className="c-solutions-dashboard__event-date">
                        <p className="c-solutions-dashboard__event-month">
                          FEB
                        </p>
                        <p className="c-solutions-dashboard__event-day-number">
                          15
                        </p>
                        <p className="c-solutions-dashboard__event-day-name">
                          Thursday
                        </p>
                      </div>
                      <div className="c-solutions-dashboard__event-date">
                        <p className="c-solutions-dashboard__event-month">
                          APR
                        </p>
                        <p className="c-solutions-dashboard__event-day-number">
                          30
                        </p>
                        <p className="c-solutions-dashboard__event-day-name">
                          Tuesday
                        </p>
                      </div>
                    </div>
                    <p className="c-solutions-dashboard__event-name">
                      Spring Window
                    </p>
                  </div>
                  <div className="c-solutions-dashboard__event">
                    <div className="c-solutions-dashboard__event-dates">
                      <div className="c-solutions-dashboard__event-date">
                        <p className="c-solutions-dashboard__event-month">
                          MAY
                        </p>
                        <p className="c-solutions-dashboard__event-day-number">
                          01
                        </p>
                        <p className="c-solutions-dashboard__event-day-name">
                          Wednesday
                        </p>
                      </div>
                      <div className="c-solutions-dashboard__event-date">
                        <p className="c-solutions-dashboard__event-month">
                          OCT
                        </p>
                        <p className="c-solutions-dashboard__event-day-number">
                          31
                        </p>
                        <p className="c-solutions-dashboard__event-day-name">
                          Thursday
                        </p>
                      </div>
                    </div>
                    <p className="c-solutions-dashboard__event-name">
                      Fall Window
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="c-solutions-dashboard__widget-heading">Topics</h3>
            <div className="c-solutions-dashboard__widget">
              <div className="c-solutions-dashboard__widget-content c-solutions-dashboard__topic">
                <a href="#" className="c-solutions-dashboard__widget-link">
                  <img src="/images/burnout.png" alt="alt text" />
                  <span>Burnout</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="c-solutions-dashboard__content">
        <h2>Driving Health Equity in the Workforce</h2>
        <p>
          Our Well-being Works Better™ Scorecard helps you identify what youre
          already doing as a company to help employees thrive. Plus, you will
          gain valuable insights: Learn how your company compares to peer
          organizations, and get customized guidance for further advancement on
          key fronts.
        </p>
        <div className="c-solutions-dashboard__content-logos">
          <img src="/images/Deloitte-logo-trimmed.png" alt="Deloitte logo" />
          <img
            src="/images/SHRM-Foundation-logo-trimmed.png"
            alt="SHRM Foundation logo"
          />
        </div>
        {/*
        <p>
          <b>The well-being Works Better&trade; Scorecard is free.</b>
        </p>
        <h2>How the Scorecard Works</h2>
        <h3>Answer the Questionnaire</h3>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur.
        </p>
        <h3>Visualize Your Score</h3>
        <p>
          Once you complete the Scorecard, you can access an interactive
          dashboard that visualizes your companys scores across different
          dimensions of well-being, including:
        </p>
        <ul>
          <li>Physical Health</li>
          <li>Emotional Health</li>
          <li>Financial Health</li>
          <li>Work Environment</li>
          <li>Community & Social</li>
        </ul>
        <h2>The Impact of Burnout</h2>
        <p>
          Chronic stress can have harmful effects on employees and companies,
          increasing the risk of conditions like heart disease and stroke.
          Preventing burnout requires more than individual self-care programs—
          workplace policies and a supportive culture are essential for
          promoting positive mental well-being.
        </p>
        <h4>The Business Case</h4>
        <p>
          Employees living with burnout are more likely to be exhausted,
          disengaged, and have lower job performance. Employee disengagement
          alone costs U.S. businesses $1.9 trillion in lost productivity.
          <b>
            Preventing burnout improves the bottom line while also optimizing
            employee health and well-being.
          </b>
        </p>
        */}
      </div>
    </div>
  </div>
);
