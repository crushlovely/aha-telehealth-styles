import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
// import { SolutionsDashboard } from "@/components/solutions-dashboard";
import { PHDCard } from "@/components/phd-card";
import { Footer } from "@/components/footer";
// import { Benefits } from "@/components/benefits";

export default function MentalWellBeing() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="red-alt"
        image="/images/mental-well-being-hero.jpg"
        overline="Mental Well-Being"
        title=""
        body="Our Scorecard empowers leaders by shedding light on workforce well-being."
        button1="CTA"
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
            <h3 className="c-solutions-dashboard__widget-heading">Topics</h3>
            <div className="c-solutions-dashboard__widget">
              <div className="c-solutions-dashboard__widget-content c-solutions-dashboard__topic">
                <a href="#" className="c-solutions-dashboard__widget-link">
                  <img src="/images/burnout.png" alt="alt text" />
                  <span>Burnout</span>
                </a>
              </div>
            </div>
          </div>
          <div className="c-solutions-dashboard__content">
            <h2>About Burnout</h2>
            <p>
              Burnout is a mental health phenomenon resulting from chronic,
              unmanaged workplace stress that is characterized by feelings of
              exhaustion, disengagement and negativity related to one’s job, and
              reduced processional performance.
            </p>

            <h3>The Impact of Burnout</h3>
            <p>
              Chronic stress can have harmful effects on employees and
              companies, increasing the risk of conditions like heart disease
              and stroke. Preventing burnout requires more than individual
              self-care programs— workplace policies and a supportive culture
              are essential for promoting positive mental well-being.
            </p>

            <h3>The Business Case</h3>
            <p>
              Work-related stress is normal. However, burnout - chronic,
              unmanaged stress - is as harmful to our health as secondhand
              smoke. Employees living with burnout are more likely to be
              exhausted, disengaged, and have lower job performance. Employee
              disengagement alone costs U.S. businesses $1.9 trillion in lost
              productivity. Preventing burnout improves the bottom line while
              also optimizing employee health and well-being.
            </p>

            <p>$500B</p>
            <p>Total cost of employee disengagement per year</p>

            <p>34%</p>
            <p>Cost from lost productivity for every salary</p>

            <p>81%</p>
            <p>Of employees prioritize mental health in future job searches</p>

            <div className="c-solutions-dashboard__quote">
              <blockquote>
                “We have an opportunity to shine a light on the role work plays
                in the nation’s mental well-being...”
              </blockquote>
              <p className="c-solutions-dashboard__quote--author">
                - Eduardo Sanchez
              </p>
            </div>

            <p>
              “We have an opportunity to shine a light on the role work plays in
              the nation’s mental well-being and how business leaders can make
              intentional changes to keep their workforce healthy and their
              business thriving.”
            </p>
          </div>
        </div>
      </div>
      {/* <Benefits /> */}
      <div className="c-benefits">
        <div className="c-benefits__info">
          <h3>Burnout</h3>
          <h2>Benefits of Burnout Prevention</h2>
          <p>
            Equip your company to be a leader in workforce well-being by
            completing our Well-being Works Better™ Scorecard. Benefits to your
            organization include
          </p>
        </div>
        <ul className="c-benefits__list">
          <li>
            <h4>
              <img src="/images/lightbulb.svg" alt="lightbulb" />
              Attract & Retain Top Talent
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
              Build Trust & Loyalty of Employees
            </h4>
            <p>
              You’ll receive an analysis that benchmarks your company’s
              achievements compared to peer organizations. You’ll also get
              customized guidance for further gains in workforce well-being.{" "}
            </p>
          </li>
          <li>
            <h4>
              <img src="/images/barbell.svg" alt="barbell" />
              Increase Productivity & Engagement
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
              Maximize Business Performance
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
      <HeroFullWidth
        theme="white"
        title="Preventing Burnout Starts with Connection"
        body="Our survey results illuminated nine science-backed practices across three domains that can reduce burnout and increase workplace well-being by up to 40%."
        button1="Download Survey"
      />
      <HeroFullWidth
        theme="aqua"
        image="https://placehold.co/936x496?text=Burnout+Placeholder"
        body="Nine best practices to beat burnout "
      />
      <PHDCard />
      <HeroFullWidth
        theme="gray-dark"
        image="/images/hero-gray-dark.jpg"
        title="Scorecard: Benefits & Recognition"
        body="Completing our Scorecard will benefit your organization. Our detailed benchmarking results and customized guidance will illuminate the state of your company’s well-being. Your company will also be recognized in our digital and print Forbes spotlight on workforce well-being."
        button1="Sign Up for Scorecard"
      />
      <AJAXNewsletter />
      <Footer />
    </>
  );
}
