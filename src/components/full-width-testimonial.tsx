export const FullWidthTestimonial = () => (
  <div className="c-testimonial">
    <div className="c-testimonial__container container container-fluid">
      <div className="row">
        <div className="col-md-5">
          <div className="c-testimonial__image">
            <div className="c-testimonial__image-placeholder h-placeholder-image">
              <img
                src="//placehold.it/300x300/ddd/ccc?text=FPO"
                data-lazy-img-loading="//placehold.it/300x300/ddd/ccc?text=FPO"
                className="is-loaded"
                alt="alt text"
              />
            </div>
          </div>
        </div>
        <div className="col-md-7 d-flex">
          <div className="c-testimonial__content">
            <blockquote className="blockquote">
              <h2 className="h3">Nancy Williams</h2>
              <p>&quot;Quotepn&quot;</p>
            </blockquote>{" "}
            <a href="#" className="c-cta c-cta--arrow h-theme--aqua-alt">
              Read Her Story
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
