export const PHDVideo = () => (
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
);
