export const HalfImageHalfCopyPromoRight = ({ theme = "white" }) => (
  <div className="container container-fluid">
    <div className={`l-promo h-theme--${theme}`}>
      {theme === "white" && (
        <div className="l-promo__col">
          <div className="c-promo__media h-placeholder-image h-placeholder-image--bg h-placeholder-image--bg-sm">
            <img
              src="https://u1-cd-wellbeingworksbetter.sc.heart.org/-/media/Project/WBWB/Leadership-Resources-Page/LeadershipResources_EmployeeWellbeingStartsatWork1_Cropped.jpg?h=494&iar=0&w=697"
              data-lazy-img-loading="https://u1-cd-wellbeingworksbetter.sc.heart.org/-/media/Project/WBWB/Leadership-Resources-Page/LeadershipResources_EmployeeWellbeingStartsatWork1_Cropped.jpg?h=494&iar=0&w=697"
              className="is-loaded"
              alt=""
            />
            <span className="image-label">Exclusive</span>
          </div>
        </div>
      )}
      <div className="l-promo__col">
        <div className="c-promo c-promo--half">
          <div className="c-promo__content">
            <span className="c-promo__label c-label c-label--orange">
              Scorecard
            </span>
            <h2 className="h3">Evaluate Company Health</h2>
            <p>
              A Tex-Mex dish, migas are corn tortilla strips gently fried and
              incorporated into scrambled eggs. This spin on the classNameic
              uses very little oil while also adding an array of veggies into
              the mix.
            </p>
          </div>
          <div className="c-promo__actions">
            <a
              href="https://www.heart.org/en/professional/health-equity/health-equity-resources"
              className="c-cta c-cta--icon h-theme--yellow-orange-alt"
            >
              <img src="assets/glyphs/recipe.svg" alt="" />
              Learn About Health Equity
            </a>
          </div>
        </div>
      </div>
      {theme === "gray" && (
        <div className="l-promo__col">
          <div className="c-promo__media h-placeholder-image h-placeholder-image--bg h-placeholder-image--bg-sm">
            <img
              src="https://u1-cd-wellbeingworksbetter.sc.heart.org/-/media/Project/WBWB/Leadership-Resources-Page/LeadershipResources_EmployeeWellbeingStartsatWork1_Cropped.jpg?h=494&iar=0&w=697"
              data-lazy-img-loading="https://u1-cd-wellbeingworksbetter.sc.heart.org/-/media/Project/WBWB/Leadership-Resources-Page/LeadershipResources_EmployeeWellbeingStartsatWork1_Cropped.jpg?h=494&iar=0&w=697"
              className="is-loaded"
              alt=""
            />
            <span className="image-label">Exclusive</span>
          </div>
        </div>
      )}
    </div>
  </div>
);
