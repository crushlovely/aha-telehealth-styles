export const Error = () => (
  <div className="container container-fluid">
    <div className="l-generic row">
      <div className="l-generic__col col-md-12">
        <div className="page-error">
          <h1
            style={{ fontSize: "5.375rem" }}
            className="text-left h-color--red font-weight-light mt-3"
          >
            404 - Page Not Found
          </h1>{" "}
          <p className="text-left" style={{ fontSize: "1.3rem" }}>
            We cant seem to find the page youre looking for. Try using our
            search feature to find similar content.
          </p>{" "}
          <p className="text-left" style={{ fontSize: "1.1rem" }}>
            <a href="/en/">Return to Well-Being Works Better homepage</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
