import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
import { Accordion } from "@/components/accordion";
import { Footer } from "@/components/footer";

export default function RecognizedOrganizations() {
  return (
    <>
      <Header />
      <HeroFullWidth
        theme="aqua-alt"
        image="/images/recognized-organizations-hero.jpg"
        title="2024 Recognized Organizations"
        body="These organizations have been acknowledged by the American Heart Association for implementing quality workforce health and well-being programs and culture of health best practices."
      />
      <div className="l-section">
        <div className="c-hero-full h-theme--green-light">
          <div className="c-hero-full__content-container container container-fluid">
            <p className="c-hero-full__kicker">
              <img
                src="https://placehold.co/30.jpg"
                alt=""
                className="c-hero-card__kicker-icon"
              />
            </p>
            <div className="c-hero-full__content">
              <h2 className="c-hero-full__heading h2">
                <strong>5,438 companies</strong> have completed the Scorecard!
              </h2>
              <div className="d-md-flex c-hero-card__btn-side-by-side">
                <a href="#" className="btn btn-round btn-primary col">
                  Start Scorecard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="l-section">
        <div className="c-hero-full h-theme--green">
          <div className="c-hero-full__content-container container container-fluid">
            <p className="c-hero-full__kicker">
              <img
                src="https://placehold.co/30.jpg"
                alt=""
                className="c-hero-card__kicker-icon"
              />
            </p>
            <div className="c-hero-full__content">
              <h2 className="c-hero-full__heading h2">
                <strong>5,438 companies</strong> have completed the Scorecard!
              </h2>
              <div className="d-md-flex c-hero-card__btn-side-by-side">
                <a href="#" className="btn btn-round btn-primary col">
                  Start Scorecard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Accordion />
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
