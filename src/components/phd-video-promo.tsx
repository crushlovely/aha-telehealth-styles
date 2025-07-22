export const PHDVideoPromo = () => (
  <div className="video-promo">
    <div className="container video-promo__container">
      <div className="video-promo__wrapper phd-shadow-box">
        <div className="row">
          <div className="col-12 col-md-6 order-md-2 video-promo__media">
            <div className="phd-video">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="c-video">
                      <div className="c-video__media-container">
                        <button className="c-video__media h-video-play h-placeholder-image h-placeholder-image--5-3">
                          <img
                            src="/images/event-card-1.jpg"
                            alt=""
                            data-lazy-img-loading="//placeimg.com/1200/600/any?0"
                            className="is-loading"
                          />
                        </button>
                      </div>
                      <div className="c-modal--youtube"></div>
                      <p className="c-video__title h5">Video Caption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="row h-100">
              <div className="col-12 video-promo__content">
                <div className="row">
                  <h2 className="col-12 video-promo__content-title">
                    Related Resources
                  </h2>
                  <div className="col-12 video-promo__content-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illo voluptatum nihil neque earum ratione inventore, quos
                      voluptate, nobis autem laudantium quasi possimus. Odio,
                      magnam architecto laborum laudantium maxime provident
                      explicabo?
                    </p>
                  </div>
                </div>
                <div className="row video-promo__content-links">
                  <div className="col video-promo__link-item">
                    <a
                      href="#"
                      className="video-promo__link c-cta c-cta--arrow h-theme--red"
                    >
                      link(s) here
                    </a>
                  </div>
                  <div className="col video-promo__link-item">
                    <a
                      href="#"
                      className="video-promo__link c-cta c-cta--arrow h-theme--red"
                    >
                      link(s) here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
