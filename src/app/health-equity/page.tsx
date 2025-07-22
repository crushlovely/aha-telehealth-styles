import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
import { SolutionsDashboard } from "@/components/solutions-dashboard";
// import { MultiLogos } from "@/components/multi-logos";
// import { HalfImageHalfCopyPromoRight } from "@/components/half-image-half-copy-promo";
import { Footer } from "@/components/footer";
// import { Benefits } from "@/components/benefits";
// import { Articles } from "@/components/articles";

export default function Solutions() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="red-alt"
        image="/images/health-equity-hero.png"
        overline="Burnout Prevention"
        title="Preventing Burnout"
        body="Addressing the underlying causes of burnout improves the bottom line, and optimizes employee well-being."
        button1="Download the Guide"
      />
      <HeroFullWidth
        theme="black"
        overline="Burnout Prevention"
        title="Preventing Burnout"
        body="Unlock the power of efficiency with our pre-written HR policy documents. Streamline your HR processes and focus on what matters most—your people. Browse our library."
        button1="Download the Guide"
      />
      <SolutionsDashboard widgets={false} />
      {/* <Benefits /> */}
      <div className="c-benefits">
        <div className="c-benefits__info">
          <h3>Health Equity</h3>
          <h2>Benefits of Health Equity</h2>
          <p>Good health for all is good business</p>
        </div>
        <ul className="c-benefits__list">
          <li>
            <h4>
              <img src="/images/money.svg" alt="money" />
              Reduce Spending
            </h4>
            <p>
              Did you know? Foo Research shows that by addressing drivers of
              health inequities in the workplace, employers can increase the
              health and productivity of their workforce and reduce health care
              spending.{" "}
            </p>
          </li>
          <li>
            <h4>
              <img src="/images/strategy.svg" alt="strategy" />
              Be in Charge
            </h4>
            <p>
              Up to 80% of health outcomes are driven by social, economic and
              environmental factors.
            </p>
          </li>
          <li>
            <h4>
              <img src="/images/smiley.svg" alt="smiley" />
              Make an Impact
            </h4>
            <p>
              Employers can have a positive impact with comprehensive health and
              well-being benefits, safe workspaces, employee education and other
              programs.
            </p>
          </li>
        </ul>
      </div>
      {/* <Articles /> */}
      <div className="c-articles">
        <div className="c-articles__container">
          <div className="c-articles__header">
            <h2 className="c-articles__heading">Updates</h2>
          </div>
          <div className="c-articles__cards">
            <div className="c-articles__card">
              <div className="c-articles__media">
                <img
                  src="/images/HE-article-1.png"
                  data-lazy-img-loading="//placehold.it/600x600/333333/666666?text=FPO"
                  className="is-loaded"
                  alt=""
                />
              </div>
              <div className="c-articles__content">
                <h3>2024 Health Equity Impact Goal</h3>
                <p>
                  This collaborative Health Equity in the Workforce initiative
                  aligns with the American Heart Association’s goal of promoting
                  equitable health for all.
                </p>
                <div className="c-articles__action">
                  <a href="#">Read More About our Goal</a>
                </div>
              </div>
            </div>
            <div className="c-articles__card">
              <div className="c-articles__media">
                <img
                  src="/images/HE-article-2.png"
                  data-lazy-img-loading="//placehold.it/600x600/333333/666666?text=FPO"
                  className="is-loaded"
                  alt=""
                />
              </div>
              <div className="c-articles__content">
                <h3>Shared Focus on Health Equity</h3>
                <p>
                  American Heart Association CEO Nancy Brown joins execs from
                  Deloitte and SHRM to share how employers can create a fairer
                  future through workplace health equity.
                </p>
                <div className="c-articles__action">
                  <a href="#">Read (or Listen to) the statement</a>
                </div>
              </div>
            </div>
            <div className="c-articles__card">
              <div className="c-articles__media">
                <img
                  src="/images/HE-article-3.png"
                  data-lazy-img-loading="//placehold.it/600x600/333333/666666?text=FPO"
                  className="is-loaded"
                  alt=""
                />
              </div>
              <div className="c-articles__content">
                <h3>CEO Roundtable</h3>
                <p>
                  Our CEO Roundtable is a leadership collaborative of nearly 50
                  CEOs – all dedicated to fostering employee health and
                  well-being.
                </p>
                <div className="c-articles__action">
                  <a href="#">Learn more about the CEO Roundtable</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroFullWidth
        theme="gray-dark"
        image="/images/get-the-scorecard-hero.png"
        title="Get The Scorecard"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button1="Get Started"
      />
      <AJAXNewsletter />
      <Footer />
    </>
  );
}
