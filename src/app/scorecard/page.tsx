import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
// import { SolutionsDashboard } from "@/components/solutions-dashboard";
import { PHDCard } from "@/components/phd-card";
import { Footer } from "@/components/footer";
// import { Benefits } from "@/components/benefits";

export default function Solutions() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="red-alt"
        image="/images/interior-hero.jpg"
        overline="Scorecard"
        title="Insights into Workforce Well-Being"
        body="Our Scorecard empowers leaders by shedding light on workforce well-being."
        button1="Get Started with the Scorecard"
      />
      {/* <SolutionsDashboard /> */}
      {/* solutions dashboard, specific to scorecard content */}
      <div className="c-solutions-dashboard">
        <div className="c-solutions-dashboard__container">
          <div className="c-solutions-dashboard__widgets-container">
            <h3 className="c-solutions-dashboard__widget-heading">
              Need assistance
            </h3>
            <div className="c-solutions-dashboard__widget c-solutions-dashboard__widget--red">
              <div className="c-solutions-dashboard__widget-content c-solutions-dashboard__help-content">
                <p className="c-solutions-dashboard__title">
                  Our support team is happy to help, or answer any questions.
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
                  1-888-242-4503
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
          </div>
          <div className="c-solutions-dashboard__content">
            <h2>About our Scorecard</h2>
            <p>
              Studies point to improvements in employee health, productivity and
              retention when organizations embrace well-being.{" "}
            </p>
            <p>
              Our Well-being Works BetterTM Scorecard helps you identify what
              you’re already doing as a company to help employees thrive. Plus,
              you will gain valuable insights: Learn how your company compares
              to peer organizations, and get customized guidance for further
              advancement on key fronts.
            </p>
            <p>The Well-being Works BetterTM Scorecard is free.</p>

            <h2>How the Scorecard Works</h2>
            <h3>Answer the Questionaire</h3>
            <p>
              Our Well-being Works BetterTM Scorecard uses your answers to a
              questionnaire to help evaluate your organization’s culture of
              health and well-being.
            </p>
            <h3>Visualize Your Score</h3>
            <p>
              Once you complete the Scorecard, you can access an interactive
              dashboard that visualizes your company’s scores across different
              dimensions of well-being, including:
            </p>
            <ul>
              <li>Leadership support</li>
              <li>Organizational policies and environment</li>
              <li>Communications</li>
              <li>Programs and interventions</li>
              <li>Engagement</li>
              <li>Community Partnerships</li>
              <li>Reporting outcomes</li>
              <li>Health equity</li>
              <li>Organizational well-being</li>
            </ul>
            <h3>Analyze Competitors</h3>
            <p>
              With the click of a mouse, you can compare your company’s
              performance with peer organizations based on industry sector,
              workforce size and annual revenue.
            </p>
            <h3>Recognition, including Forbes</h3>
            <p>
              Based on your Scorecard results, your company will earn a
              recognition level from the American Heart Association:
            </p>
            <p>
              Companies will be featured by recognition level in an annual
              Forbes print and digital spotlight on workforce well-being. See
              the most recent edition.
            </p>
          </div>
        </div>
      </div>
      <HeroFullWidth
        theme="aqua"
        image="https://placehold.co/936x496?text=Scorecard+Demo+Placeholder"
        body="The Well-Being Works BetterTM Scorecard Dashboard"
      />
      {/* <Benefits /> */}
      <div className="c-benefits">
        <div className="c-benefits__info">
          <h3>Scorecard</h3>
          <p className="c-benefits__info-subtitle">Scorecard</p>
          <h2>Scorecard Benefits</h2>
          <p>
            Equip your company to be a leader in workforce well-being by
            completing our Well-being Works Better™ Scorecard. Benefits to your
            organization include:
          </p>
        </div>
        <ul className="c-benefits__list">
          <li>
            <h4>
              <img src="/images/lightbulb.svg" alt="lightbulb" />
              Get Insights
            </h4>
            <p>
              By illuminating the areas where your company is already promoting
              well-being, the Scorecard results will help your organization
              foster, evolve and continuously improve your workforce culture.
            </p>
          </li>
          <li>
            <h4>
              <img src="/images/check.svg" alt="check" />
              Get Answers
            </h4>
            <p>
              You’ll receive an analysis that benchmarks your company’s
              achievements compared to peer organizations. You’ll also get
              customized guidance for further gains in workforce well-being.
            </p>
          </li>
          <li>
            <h4>
              <img src="/images/barbell.svg" alt="barbell" />
              Get Stronger
            </h4>
            <p>
              Build on your current success with our free, ready-to-launch
              initiatives, guides and resources. Create a competitive advantage
              for your company that helps you attract and retain top talent.
            </p>
          </li>
          <li>
            <h4>
              <img src="/images/tada.svg" alt="tada" />
              Get Recognized
            </h4>
            <p>
              Your company will receive earn a recognition level (Platinum,
              Gold, etc.) from the American Heart Association. Your organization
              will also be recognized as part of a Forbes spotlight on
              well-being.
            </p>
          </li>
        </ul>
      </div>
      <PHDCard />
      <HeroFullWidth
        theme="gray-dark"
        image="/images/interior-hero.jpg"
        title="Scorecard: Benefits & Recognition"
        body="Completing our Scorecard will benefit your organization. Our detailed benchmarking results and customized guidance will illuminate the state of your company’s well-being. Your company will also be recognized in our digital and print Forbes spotlight on workforce well-being."
        button1="Sign Up for Scorecard"
      />
      <AJAXNewsletter />
      <Footer />
    </>
  );
}
