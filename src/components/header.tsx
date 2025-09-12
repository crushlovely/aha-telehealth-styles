"use client";

import React, { useState } from "react";

export const Header = ({ loggedIn: _loggedIn = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="l-header__top">
      <div className="container container-fluid container-wide">
        <nav
          role="navigation"
          aria-label="Top Navigation"
          className="c-top-nav js-mobile-nav-positioning"
        >
          <a
            href="https://cpr.heart.org/en/"
            className="c-top-nav__logo does-fade-out"
          >
            <img
              src="/images/logo.svg"
              alt="American Heart Association CPR & ECC"
            />{" "}
            <div className="sticky__logo">
              <img
                src="/images/logo.svg"
                alt="American Heart Association"
                style={{ display: "block", opacity: 0 }}
              />
            </div>
          </a>{" "}
          <ul className="c-top-nav__nav nav">
            <li className="c-top-nav__item">
              <a
                href="/courses"
                target=""
                className="c-top-nav__link c-cta c-cta--icon"
              >
                <span className="c-underline-link">Courses</span>
              </a>
            </li>
            <li className="c-top-nav__item">
              <a
                href="/certifications"
                target=""
                className="c-top-nav__link c-cta c-cta--icon"
              >
                <span className="c-underline-link">Certifications</span>
              </a>
            </li>
            <li className="c-top-nav__item">
              <a
                href="/insights"
                target=""
                className="c-top-nav__link c-cta c-cta--icon"
              >
                <span className="c-underline-link">Latest from the Field</span>
              </a>
            </li>
            <li className="c-top-nav__item">
              <a
                href="/advisory-committee"
                target=""
                className="c-top-nav__link c-cta c-cta--icon"
              >
                <span className="c-underline-link">Advisory Committee</span>
              </a>
            </li>
            <li className="c-top-nav__item">
              <a
                href="/patient-resources"
                target=""
                className="c-top-nav__link c-cta c-cta--icon"
              >
                <span className="c-underline-link">Patient Resources</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="btn c-top-nav__link btn btn-link-plain btn-secondary"
              >
                <img
                  src="/images/search.svg"
                  alt="site search"
                  width={24}
                  height={24}
                  loading="lazy"
                />{" "}
                <span className="sr-only">Search</span>
              </button>{" "}
              <div className="c-site-search-modal global-search-section">
                <div id="coveomodal1___BV_modal_outer_">
                  <div
                    id="coveomodal1"
                    role="dialog"
                    aria-hidden="true"
                    className="modal fade"
                    style={{ display: "none" }}
                  >
                    <div className="modal-dialog modal-md">
                      <div
                        role="document"
                        aria-labelledby="coveomodal1___BV_modal_header_"
                        aria-describedby="coveomodal1___BV_modal_body_"
                        className="modal-content"
                      >
                        <header
                          id="coveomodal1___BV_modal_header_"
                          className="modal-header"
                        >
                          {/**/}
                          <button
                            type="button"
                            aria-label="Close"
                            className="close"
                          >
                            ×
                          </button>
                        </header>
                        <div
                          id="coveomodal1___BV_modal_body_"
                          className="modal-body"
                        >
                          <div className="global-search-section__search-text">
                            {" "}
                            Search{" "}
                          </div>{" "}
                          <div className="global-search-section__coveo-block">
                            <div>
                              <div
                                id="_6A997985-3AA4-43B1-B666-B7F67F64E346"
                                data-search-interface-id="coveoC606340E"
                              >
                                <div className="coveo-search-section">
                                  <div
                                    id="_185F67BF-1D73-4AEE-9564-FDE5B0EB24D9_container"
                                    data-prebind-maximum-age="currentMaximumAge"
                                    className="coveo-for-sitecore-search-box-container CoveoSearchInterface Coveostate CoveoComponentState CoveoComponentOptions CoveoQueryController CoveoDebug coveo-after-initialization"
                                    data-applied-prebind="true"
                                    data-maximum-age={900000}
                                    style={{ display: "block" }}
                                    data-coveo-for-sitecore-event-registered="true"
                                  >
                                    <div className="CoveoFacetsMobileMode" />
                                    <div
                                      id="_185F67BF-1D73-4AEE-9564-FDE5B0EB24D9"
                                      data-enable-omnibox="true"
                                      data-prebind-maximum-age="currentMaximumAge"
                                      data-placeholder="Type to search..."
                                      data-clear-filters-on-new-query="false"
                                      className="CoveoSearchbox"
                                      data-applied-prebind="true"
                                      data-maximum-age={900000}
                                    >
                                      <div className="CoveoForSitecoreBindWithUserContext" />{" "}
                                      <div className="CoveoForSitecoreExpressions" />{" "}
                                      <div
                                        data-sc-search-hub="Search"
                                        className="CoveoForSitecoreConfigureSearchHub"
                                      />
                                      <div
                                        className="CoveoOmnibox coveo-query-syntax-disabled magic-box"
                                        role="search"
                                        aria-expanded="false"
                                      >
                                        <div className="magic-box-input">
                                          <div className="magic-box-underlay">
                                            <span className="magic-box-highlight-container">
                                              <span
                                                data-id="start"
                                                data-success="true"
                                              >
                                                <span
                                                  data-id="Any"
                                                  data-success="true"
                                                  data-value=""
                                                />
                                              </span>
                                            </span>
                                            <span className="magic-box-ghost-text" />
                                          </div>
                                          <input
                                            autoComplete="off"
                                            type="text"
                                            role="combobox"
                                            form="coveo-dummy-form"
                                            aria-autocomplete="list"
                                            title="Insert a query. Press enter to send"
                                            aria-expanded="false"
                                            aria-owns="coveo-magicbox-suggestions-6968e2fc-3315-18fa-d998-db69654ad39f"
                                            aria-controls="coveo-magicbox-suggestions-6968e2fc-3315-18fa-d998-db69654ad39f"
                                            aria-label="Search"
                                            placeholder="Type to search..."
                                          />
                                          <div
                                            className="magic-box-clear coveo-accessible-button"
                                            role="button"
                                            aria-label="Clear"
                                            aria-hidden="true"
                                          >
                                            <div className="magic-box-icon">
                                              <svg
                                                focusable="false"
                                                enableBackground="new 0 0 13 13"
                                                viewBox="0 0 13 13"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Clear"
                                                className="magic-box-clear-svg"
                                              >
                                                <title>Clear</title>
                                                <g fill="currentColor">
                                                  <path d="m7.881 6.501 4.834-4.834c.38-.38.38-1.001 0-1.381s-1.001-.38-1.381 0l-4.834 4.834-4.834-4.835c-.38-.38-1.001-.38-1.381 0s-.38 1.001 0 1.381l4.834 4.834-4.834 4.834c-.38.38-.38 1.001 0 1.381s1.001.38 1.381 0l4.834-4.834 4.834 4.834c.38.38 1.001.38 1.381 0s .38-1.001 0-1.381z" />
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="magic-box-suggestions">
                                          <div
                                            className="coveo-magicbox-suggestions"
                                            id="coveo-magicbox-suggestions-34f60a81-29c3-aaea-5112-8319557b6654"
                                            role="listbox"
                                            aria-label="Search Suggestions"
                                          >
                                            <div
                                              className="magic-box-suggestion coveo-omnibox-selectable"
                                              id="magic-box-suggestion-0"
                                              role="option"
                                              aria-selected="false"
                                              aria-label="test"
                                            >
                                              <span>test</span>
                                            </div>
                                            <div
                                              className="magic-box-suggestion coveo-omnibox-selectable"
                                              id="magic-box-suggestion-1"
                                              role="option"
                                              aria-selected="false"
                                              aria-label="bls test"
                                            >
                                              <span>bls</span> <span>test</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <a
                                        className="CoveoSearchButton coveo-accessible-button"
                                        role="button"
                                        aria-label="Search"
                                      >
                                        <span className="coveo-search-button">
                                          <svg
                                            focusable="false"
                                            enableBackground="new 0 0 20 20"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Search"
                                            className="coveo-search-button-svg"
                                          >
                                            <title>Search</title>
                                            <g fill="currentColor">
                                              <path
                                                className="coveo-magnifier-circle-svg"
                                                d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793"
                                              />
                                              <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377" />
                                            </g>
                                          </svg>
                                        </span>
                                        <span className="coveo-search-button-loading">
                                          <svg
                                            focusable="false"
                                            enableBackground="new 0 0 18 18"
                                            viewBox="0 0 18 18"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            aria-label="Loading"
                                            className="coveo-search-button-loading-svg"
                                          >
                                            <title>Loading</title>
                                            <g fill="currentColor">
                                              <path d="m16.76 8.051c-.448 0-.855-.303-.969-.757-.78-3.117-3.573-5.294-6.791-5.294s-6.01 2.177-6.79 5.294c-.134.537-.679.861-1.213.727-.536-.134-.861-.677-.728-1.212 1.004-4.009 4.594-6.809 8.731-6.809 4.138 0 7.728 2.8 8.73 6.809.135.536-.191 1.079-.727 1.213-.081.02-.162.029-.243.029z" />
                                              <path d="m9 18c-4.238 0-7.943-3.007-8.809-7.149-.113-.541.234-1.071.774-1.184.541-.112 1.071.232 1.184.773.674 3.222 3.555 5.56 6.851 5.56s6.178-2.338 6.852-5.56c.113-.539.634-.892 1.184-.773.54.112.887.643.773 1.184-.866 4.142-4.57 7.149-8.809 7.149z" />
                                            </g>
                                          </svg>
                                        </span>
                                      </a>
                                    </div>
                                    <div
                                      className="CoveoForSitecoreContext"
                                      data-sc-should-have-analytics-component="true"
                                      data-sc-analytics-enabled="true"
                                      data-sc-current-language="en"
                                      data-prebind-sc-language-field-name="fieldTranslator"
                                      data-sc-language-field-name="z95xlanguage"
                                      data-sc-labels='{"Descending" : "Descending" , "Ascending" : "Ascending" , "Directions" : "Directions" , "Miles" : "miles" , "Website" : "Website" , "Language" : "Language" , "Updated By" : "Updated by" , "Created By" : "Created by" , "Creation Time" : "Creation time." , "Created" : "Created" , "Template" : "Template" , "Last Time Modified" : "Last time modified." , "Uniform resource identifier" : "URI" , "If the problem persists contact the administrator." : "If the problem persists contact the administrator." , "Search is currently unavailable" : "Oops! Something went wrong on the server."}'
                                      data-sc-maximum-age={900000}
                                      data-sc-page-name="Home"
                                      data-sc-page-name-full-path="/sitecore/content/CPR/Home"
                                      data-sc-index-source-name="Coveo_web_index - Production"
                                      data-sc-is-in-experience-editor="false"
                                      data-sc-is-user-anonymous="true"
                                      data-sc-item-uri="sitecore://web/{159CAEC9-E06D-4FA6-96DE-F33531FFFC82}?lang=en&ver=54"
                                      data-sc-item-id="159caec9-e06d-4fa6-96de-f33531fffc82"
                                      data-prebind-sc-latest-version-field-name="fieldTranslator"
                                      data-sc-latest-version-field-name="z95xlatestversion"
                                      data-sc-rest-endpoint-uri="/coveo/rest"
                                      data-sc-analytics-endpoint-uri="/coveo/rest/ua"
                                      data-sc-site-name="cpr"
                                      data-sc-field-prefix="f"
                                      data-sc-field-suffix={7050}
                                      data-sc-prefer-source-specific-fields="false"
                                      data-sc-external-fields='[{"fieldName":"permanentid","shouldEscape":false}]'
                                      data-sc-source-specific-fields='[{"fieldName":"attachmentparentid"},{"fieldName":"author"},{"fieldName":"clickableuri"},{"fieldName":"collection"},{"fieldName":"concepts"},{"fieldName":"date"},{"fieldName":"filetype"},{"fieldName":"indexeddate"},{"fieldName":"isattachment"},{"fieldName":"language"},{"fieldName":"printableuri"},{"fieldName":"rowid"},{"fieldName":"size"},{"fieldName":"source"},{"fieldName":"title"},{"fieldName":"topparent"},{"fieldName":"topparentid"},{"fieldName":"transactionid"},{"fieldName":"uri"},{"fieldName":"urihash"}]'
                                      data-applied-prebind="true"
                                    ></div>
                                    <div
                                      aria-live="polite"
                                      className="coveo-visible-to-screen-reader-only"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  {/**/}
                </div>
              </div>
            </li>
          </ul>{" "}
          <div>
            <button
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              className="c-top-nav__menu-trigger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="c-top-nav__hamburger">
                <span className="sr-only">Menu</span>
              </span>
            </button>{" "}
            {/* <div className="c-mobile-nav">
              <div id="mobile-navigation___BV_modal_outer__lxp5m9hk">
                <div
                  id="mobile-navigation_lxp5m9hk"
                  aria-label="Mobile Navigation"
                  className="modal fade show d-block"
                  style={{
                    paddingRight: "0px",
                    top: "116.737px",
                    bottom: "0px",
                  }}
                >
                  <div className="modal-dialog modal-md">
                    <div className="modal-content">
                      <div
                        id="mobile-navigation___BV_modal_body__lxp5m9hk"
                        className="modal-body"
                      >
                        <ul className="c-mobile-nav__list">
                          <li>
                            <form
                              action=""
                              className="c-mobile-nav__search c-mobile-nav__list-item"
                            >
                              <label>
                                <input
                                  id="mobile-search"
                                  type="text"
                                  placeholder="Search American Heart Association"
                                  className="c-mobile-nav__search-input"
                                />
                                <span className="sr-only">
                                  Search American Heart Association
                                </span>
                              </label>
                              <button
                                type="submit"
                                className="c-mobile-nav__search-submit btn btn-link-plain"
                              >
                                <span className="sr-only">Search</span>{" "}
                                <img src="/images/search.svg" alt="" />
                              </button>
                            </form>
                          </li>
                          <li>
                            <button
                              className="c-mobile-nav__list-item btn btn-link-plain btn--select c-cta--icon collapsed"
                              aria-controls="294dffe3c1be469dac0c6130a14345fc"
                              aria-expanded="false"
                            >
                              <span>Solutions</span>
                            </button>
                            <div
                              id="294dffe3c1be469dac0c6130a14345fc"
                              className="collapse"
                              style={{ display: "none" }}
                            >
                              <ul className="c-mobile-nav__sub-list nav flex-column">
                                <li className="nav-item">
                                  <a href="/en/scorecard" className="">
                                    Scorecard
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="/en/health-equity" className="">
                                    Health Equity
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="/en/burnout" className="">
                                    Burnout
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <button
                              className="c-mobile-nav__list-item btn btn-link-plain btn--select c-cta--icon collapsed"
                              aria-controls="0e5b92659ca64ed2b0b0ff1cec71844a"
                              aria-expanded="false"
                            >
                              <span>Knowledge Hub</span>
                            </button>
                            <div
                              id="0e5b92659ca64ed2b0b0ff1cec71844a"
                              className="collapse"
                              style={{ display: "none" }}
                            >
                              <ul className="c-mobile-nav__sub-list nav flex-column">
                                <li className="nav-item">
                                  <a href="/en/employee" className="">
                                    Employee
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="/en/leadership" className="">
                                    Leadership
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a
                              href="/en/get-involved"
                              className="c-mobile-nav__list-item c-cta c-cta--icon"
                            >
                              Get Involved
                            </a>
                          </li>
                          <li>
                            <a
                              href="/en/recognized-organizations"
                              className="c-mobile-nav__list-item c-cta c-cta--icon h-color--red"
                            >
                              Recognized Organizations
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
};
