export const HowItWorks = () => (
  <div className="c-how-it-works">
    <div className="c-how-it-works__container">
      <div className="c-how-it-works__header">
        <h2>Telehealth Spans the Spectrum of Health Care</h2>
        <p>
          From preventive care to community health, telehealth transforms every
          aspect of healthcare delivery
        </p>
        {/* <a href="#">Learn More</a> */}
      </div>
      <div className="c-how-it-works__main">
        <div className="c-how-it-works__media">
          <img src="/images/how-it-works-graphic.svg" alt="[image-alt-text]" />
        </div>
        <ol className="c-how-it-works__steps">
          <li className="c-how-it-works__step">
            <h3>Outpatient & Corporate Wellness</h3>
            <p>Enhancing a range of preventative care</p>
          </li>
          <li className="c-how-it-works__step">
            <h3>Acute & Disease Management</h3>
            <p>
              Specialty care, virtual consults, diagnostics and patient routing
            </p>
          </li>
          <li className="c-how-it-works__step">
            <h3>Healthcare Transition</h3>
            <p>Virtual health engagement and hospital-at-home</p>
          </li>
          <li className="c-how-it-works__step">
            <h3>Community & Home Health</h3>
            <p>Post-acute care, rehabilitation, remote patient monitoring</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
);
