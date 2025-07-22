export const SpeedBump = ({ open = false }) => (
  <div id="speed-bump">
    <a
      href="https://www.forbes.com/sites/american-heart-association/2024/04/15/how-3-companies-put-health-at-the-heart-of-the-workplace/?sh=4264ac0610b2"
      id="speed-bump-link"
      role="button"
      style={{ display: "none" }}
    />{" "}
    <div className="c-speed-bump__modal text-center">
      <div id="speed-bump-modal___BV_modal_outer__lxxqtx7r">
        <div
          id="speed-bump-modal_lxxqtx7r"
          className={`modal fade ${open ? "show d-block" : ""}`}
          style={{}}
        >
          <div className="modal-dialog modal-md modal-dialog-centered">
            <div tabIndex={-1} className="modal-content">
              <div
                id="speed-bump-modal___BV_modal_header__lxxqtx7r"
                className="modal-header"
              >
                <h2 className="sr-only">Speed Bump</h2>
              </div>
              <div
                id="speed-bump-modal___BV_modal_body__lxxqtx7r"
                className="modal-body"
                data-gtm-vis-recent-on-screen9459665_504={21126}
                data-gtm-vis-first-on-screen9459665_504={21126}
                data-gtm-vis-total-visible-time9459665_504={100}
                data-gtm-vis-has-fired9459665_504={1}
              >
                {" "}
                <button type="button" aria-label="Close" className="close">
                  ×
                </button>{" "}
                <div className="c-speed-bump__media">
                  <img
                    src="https://www.heart.org/-/media/Images/Logos/Global-Do-No-Edit/Two-Click/ahalogo.png?h=165&w=280&hash=168DCCAE6E56E2ADD3D1F722F15D5C58"
                    alt="American Heart Association logo"
                  />
                </div>{" "}
                <p>
                  This link is provided for convenience only and is not an
                  endorsement of either the linked-to entity or any product or
                  service.
                </p>{" "}
                <p>
                  <span className="c-speed-bump__link">
                    https://www.forbes.com/sites/american-heart-association/2024/04/15/how-3-companies-put-health-at-the-heart-of-the-workpl...
                  </span>
                </p>{" "}
                <a
                  target="_blank"
                  className="btn btn-danger btn-round"
                  href="https://www.forbes.com/sites/american-heart-association/2024/04/15/how-3-companies-put-health-at-the-heart-of-the-workplace/?sh=4264ac0610b2"
                >
                  Proceed
                </a>
              </div>
              {/**/}
            </div>
          </div>
        </div>
        <div
          id="speed-bump-modal___BV_modal_backdrop__lxxqtx7r"
          className="modal-backdrop fade show"
        />
      </div>
    </div>
  </div>
);
