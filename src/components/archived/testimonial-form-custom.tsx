export const TestimonialFormCustom = () => (
  <div className="c-testimonial-form">
    <div className="c-testimonial-form__container" aria-live="polite">
      <div className="c-testimonial-form__header">
        <h2>Tell us your Well-being experience, and you could be featured!</h2>
        <p>
          We’d love to showcase your progress journey and successes as a thought
          leader in workforce well-being! We invite you to share a quote,
          testimonial, or story detailing how your company has benefited from a
          Well-being Works Better resource, solution, or event. Whether it’s a
          specific insight that helped to shift your approach to workforce
          health and well-being or just a positive impact you’ve experienced,
          your story has the potential to inspire others.
        </p>
        <p>
          Kindly note that success stories may be shared in our newsletter,
          website, social media channels, and may be condensed for a feature.
        </p>
      </div>
      <div className="c-testimonial-form__header c-testimonial-form__header--success">
        <h2>Thank You!</h2>
        <p>We have received your submission and will review it shortly.</p>
      </div>
      <form className="c-testimonial-form__form">
        <div className="c-testimonial-form__form-group">
          <div className="c-testimonial-form__form-field">
            <label htmlFor="first-name">
              First Name<span className="required">Required</span>
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="First Name"
                id="first-name"
                name="first-name"
                required
              />
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <label htmlFor="last-name">
              Last Name<span className="required">Required</span>
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Last Name"
                id="last-name"
                name="last-name"
                required
              />
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <label htmlFor="organization">
              Organization<span className="required">Required</span>
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Organization"
                id="organization"
                name="organization"
                required
              />
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <label htmlFor="title">
              Title<span className="required">Required</span>
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Title"
                id="title"
                name="title"
                required
              />
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <label htmlFor="email">
              Email<span className="required">Required</span>
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <label htmlFor="additional-contact-info">
              Additional Contact Info<span className="required">Required</span>
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Additional Contact Info"
                id="additional-contact-info"
                name="additional-contact-info"
                required
              />
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <label htmlFor="subject">
              My Testimonial is About
              <span className="required">Required</span>
            </label>
            <div className="input-wrapper input-wrapper--select">
              <select id="subject" name="subject" required>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="c-testimonial-form__form-group">
          <div className="c-testimonial-form__form-field">
            <div className="input-wrapper input-wrapper--checkbox">
              <input type="checkbox" id="may-contact" name="may-contact" />
              <label htmlFor="may-contact">
                <p>
                  May we contact you to learn more about your company’s story?
                </p>
              </label>
            </div>

            <div className="input-wrapper input-wrapper--checkbox">
              <input
                type="checkbox"
                id="involved-with-local-aha"
                name="involved-with-local-aha"
              />
              <label htmlFor="involved-with-local-aha">
                <p>Are you involved with your local AHA?</p>
              </label>
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <p>
              If you are involved with your local AHA, who is your local
              contact?
            </p>
            <label htmlFor="aha-contact-info">Local AHA Contact Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Contact Name"
                id="aha-contact-info"
                name="aha-contact-info"
                required
              />
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <label htmlFor="testimonial">
              Testimonial<span className="required">Required</span>
            </label>
            <div className="input-wrapper">
              <textarea
                placeholder="Write your testimonial here"
                id="testimonial"
                name="testimonial"
                required
              ></textarea>
            </div>
          </div>
          <div className="c-testimonial-form__form-field">
            <div className="input-wrapper input-wrapper--checkbox">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                <p>
                  By clicking you agree to the{" "}
                  <a href="#">Terms and Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                  <span className="required">Required</span>
                </p>
              </label>
            </div>
            <div className="input-wrapper input-wrapper--checkbox">
              <input type="checkbox" id="rules" name="rules" required />
              <label htmlFor="rules">
                <p>
                  I agree to the rules in <a href="#">this document</a>
                  <span className="required">Required</span>
                </p>
              </label>
            </div>
          </div>
          <div className="c-testimonial-form__form-actions">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
