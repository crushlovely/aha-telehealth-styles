export const MultiLinks = () => (
  <div className="c-multi-links">
    <div className="c-multi-links__container">
      <div className="c-multi-links__header">
        <h2 className="c-multi-links__heading">
          2023 RECOGNIZED ORGANIZATIONS
          <a href="" className="c-mutli-links__cta"></a>
        </h2>
        {/* <a className="c-multi-links__cta" href="#">
          Learn More
        </a> */}
      </div>

      <ul className="c-multi-links__links">
        <li>
          <a
            className="c-multi-links__link c-multi-links__link--platinum platinum"
            href="/en/recognized-organizations"
          >
            <span>Platinum Tier</span>
          </a>
        </li>
        <li>
          <a
            className="c-multi-links__link c-multi-links__link--gold gold"
            href="/en/recognized-organizations"
          >
            <span>Gold Tier</span>
          </a>
        </li>
        <li>
          <a
            className="c-multi-links__link c-multi-links__link--silver silver"
            href="/en/recognized-organizations"
          >
            <span>Silver Tier</span>
          </a>
        </li>
        <li>
          <a
            className="c-multi-links__link c-multi-links__link--bronze bronze"
            href="/en/recognized-organizations"
          >
            <span>Completers</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);
