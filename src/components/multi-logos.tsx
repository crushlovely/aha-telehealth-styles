interface MultiLogosProps {
  theme?: string;
}

// function for MultiLogos using props
export const MultiLogos = ({ theme = "red" }: MultiLogosProps) => (
  <div className={`c-multi-logos h-theme--${theme}`}>
    <div className="c-multi-logos__container">
      <div className="c-multi-logos__header">
        <h2 className="c-multi-logos__heading">Heading Here</h2>
        <a className="c-multi-logos__cta" href="#">
          Learn More
        </a>
      </div>

      <ul className="c-multi-logos__logos">
        <li>
          <a className="c-multi-logos__logo" href="#">
            <img
              src="//placehold.it/200x100/fafafa/cccccc"
              className="is-loaded"
              alt="alt here"
            />
          </a>
        </li>
        <li>
          <a className="c-multi-logos__logo" href="#">
            <img
              src="//placehold.it/300x300/fafafa/cccccc"
              className="is-loaded"
              alt="alt here"
            />
          </a>
        </li>
        <li>
          <a className="c-multi-logos__logo" href="#">
            <img
              src="//placehold.it/300x100/fafafa/cccccc"
              className="is-loaded"
              alt="alt here"
            />
          </a>
        </li>
        <li>
          <a className="c-multi-logos__logo" href="#">
            <img
              src="//placehold.it/200x100/fafafa/cccccc"
              className="is-loaded"
              alt="alt here"
            />
          </a>
        </li>
        <li>
          <a className="c-multi-logos__logo" href="#">
            <img
              src="//placehold.it/200x100/fafafa/cccccc"
              className="is-loaded"
              alt="alt here"
            />
          </a>
        </li>
        <li>
          <a className="c-multi-logos__logo" href="#">
            <img
              src="//placehold.it/200x100/fafafa/cccccc"
              className="is-loaded"
              alt="alt here"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
);
