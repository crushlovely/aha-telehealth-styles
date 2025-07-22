import { AJAXNewsletter } from "@/components/ajax-newsletter";
import { Header } from "@/components/header";
import { HeroFullWidth } from "@/components/hero-full-width";
// import { SolutionsDashboard } from "@/components/solutions-dashboard";
// import { MultiLogos } from "@/components/multi-logos";
// import { PHDCard } from "@/components/phd-card";
import { HalfImageHalfCopyPromoRight } from "@/components/half-image-half-copy-promo";
import { Footer } from "@/components/footer";
// import { Benefits } from "@/components/benefits";
// import { Articles } from "@/components/articles";

export default function Solutions() {
  return (
    <>
      <Header />
      <div className="l-section">
        <div className="c-hero-full h-theme--aqua-alt">
          <div className="c-hero-full__media h-placeholder-image h-placeholder-image--bg">
            <img
              src="https://www.wellbeingworksbetter.org//en/-/media/Project/WBWB/About-Us-Page/HeroAquaAltImage_Cropped.jpg?h=926&amp;iar=0&amp;mw=1910&amp;w=1910&amp;sc_lang=en"
              alt="smiling coffee shop employee looking downwards"
              width="1910"
              height="926"
              loading="lazy"
              className="is-loaded"
            />
            <span></span>
          </div>
          <div className="c-hero-full__content-container container container-fluid">
            <div className="row no-gutters w-100">
              <div className="col-md-6">
                <div className="c-hero-full__content">
                  <h1 className="c-hero-full__heading">About Us </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HeroFullWidth
        theme="aqua-alt"
        image="/images/TestHeroAquaAlt.jpg"
        title="Employee Resources"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      /> */}
      <HalfImageHalfCopyPromoRight />
      <HalfImageHalfCopyPromoRight theme="gray" />
      <HalfImageHalfCopyPromoRight />
      <HalfImageHalfCopyPromoRight theme="gray" />
      <HalfImageHalfCopyPromoRight />
      <HalfImageHalfCopyPromoRight theme="gray" />
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
