"use client";
import { useState } from "react";

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="l-phd">
      <div className="c-accordion">
        <div role="tablist">
          {/* index 0 */}
          <div className="card mb-2">
            <header className="card-header p-0">
              <button
                type="button"
                className={`btn btn--select btn-plain btn-block ${openIndex === 0 ? "" : "collapsed"}`}
                aria-controls="accordion-1"
                aria-expanded="false"
                onClick={() =>
                  openIndex === 0 ? setOpenIndex(null) : setOpenIndex(0)
                }
              >
                Forbes
              </button>
            </header>
            <div
              id="accordion-1"
              className="collapse"
              style={{
                display: openIndex === 0 ? "block" : "none",
              }}
            >
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repudiandae obcaecati ducimus aliquam consequuntur qui vitae
                  dolor quis, accusamus fugiat doloribus voluptate inventore
                  quisquam itaque sint neque, temporibus rerum possimus ea.
                </p>
                <button>button?</button>
                <ul>
                  <li>Research Plan 8 Pages</li>{" "}
                  <li>Biographical Sketch/Bibliography (5 pages)</li>{" "}
                  <li>Resubmission Modifications (if applicable, 2 pages)</li>{" "}
                  <li>
                    Vertebrate Animal Subjects (if applicable, no page limit)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* index 1 */}
          <div className="card mb-2">
            <header className="card-header p-0">
              <button
                type="button"
                className={`btn btn--select btn-plain btn-block ${openIndex === 1 ? "" : "collapsed"}`}
                aria-controls="accordion-2"
                aria-expanded="true"
                onClick={() =>
                  openIndex === 1 ? setOpenIndex(null) : setOpenIndex(1)
                }
              >
                Platinum Tier
              </button>
            </header>
            <div
              id="accordion-2"
              className="collapse show"
              style={{
                display: openIndex === 1 ? "block" : "none",
              }}
            >
              <div className="card-body">
                <p>
                  Dr. Appel is the C. David Molina Professor of Medicine and
                  Director of the Welch Center for Prevention, Epidemiology and
                  Clinical Research, a joint program of the Johns Hopkins
                  University School of Medicine and the Bloomberg School of
                  Public Health. Dr. Appel holds a primary faculty appointment
                  in the Division of General Internal Medicine with joint
                  appointments in Epidemiology, International Health, and
                  Nursing. In addition, he directs the ProHealth Clinical
                  Research Unit in West Baltimore.
                </p>{" "}
                <p>
                  The focus of Dr. Appel’s investigative career is the conduct
                  of clinical, epidemiologic, and translational research
                  pertaining to the prevention of high blood pressure,
                  cardiovascular-kidney diseases, and other chronic conditions.
                  He has conducted over 50 studies and published over 400
                  papers. Many of his research findings have had a substantial
                  influence on health and health care policy. His principal
                  lines of research are:
                </p>{" "}
                <p>
                  Dr. Appel has also been actively involved in shaping health
                  care policy. He was a member of the 2005 and 2010 U.S. Dietary
                  Guidelines Scientific Advisory Committees. For the American
                  Heart Association, he has chaired its Nutrition Committee and
                  its Council on Lifestyle and Cardiometabolic Health. He has
                  served on several NIH and Institute of Medicine Committees and
                  chaired the committee that set dietary reference intakes for
                  sodium, potassium, and water. Among his awards are membership
                  in the Association of American Physicians and the National
                  Academy of Medicine (formerly Institute of Medicine).
                </p>
              </div>
            </div>
          </div>

          {/* index 2 */}
          <div className="card mb-2">
            <header className="card-header p-0">
              <button
                type="button"
                className={`btn btn--select btn-plain btn-block ${openIndex === 2 ? "" : "collapsed"}`}
                aria-controls="accordion-3"
                aria-expanded="false"
                onClick={() =>
                  openIndex === 2 ? setOpenIndex(null) : setOpenIndex(2)
                }
              >
                Gold Tier
              </button>
            </header>
            <div
              id="accordion-3"
              className="collapse"
              style={{
                display: openIndex === 2 ? "block" : "none",
              }}
            >
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repudiandae obcaecati ducimus aliquam consequuntur qui vitae
                  dolor quis, accusamus fugiat doloribus voluptate inventore
                  quisquam itaque sint neque, temporibus rerum possimus ea.
                </p>
                <a className="btn">button?</a>
              </div>
            </div>
          </div>

          {/* index 3 */}
          <div className="card mb-2">
            <header className="card-header p-0">
              <button
                type="button"
                className={`btn btn--select btn-plain btn-block ${openIndex === 3 ? "" : "collapsed"}`}
                aria-controls="accordion-4"
                aria-expanded="false"
                onClick={() =>
                  openIndex === 3 ? setOpenIndex(null) : setOpenIndex(3)
                }
              >
                Silver Tier
              </button>
            </header>
            <div
              id="accordion-4"
              className="collapse"
              style={{
                display: openIndex === 3 ? "block" : "none",
              }}
            >
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repudiandae obcaecati ducimus aliquam consequuntur qui vitae
                  dolor quis, accusamus fugiat doloribus voluptate inventore
                  quisquam itaque sint neque, temporibus rerum possimus ea.
                </p>
                <button>button?</button>
                <ul>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                  <li>Company Name</li>
                </ul>
              </div>
            </div>
          </div>

          {/* index 4 */}
          <div className="card mb-2">
            <header className="card-header p-0">
              <button
                type="button"
                className={`btn btn--select btn-plain btn-block ${openIndex === 4 ? "" : "collapsed"}`}
                aria-controls="accordion-5"
                aria-expanded="false"
                onClick={() =>
                  openIndex === 4 ? setOpenIndex(null) : setOpenIndex(4)
                }
              >
                Bronze Tier
              </button>
            </header>
            <div
              id="accordion-5"
              className="collapse"
              style={{
                display: openIndex === 4 ? "block" : "none",
              }}
            >
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="my-3">
                    <strong>
                      <a href="#">Research Plan 8 Pages</a>
                    </strong>
                  </li>{" "}
                  <li className="my-3">
                    <strong>
                      <a href="#">
                        Vertebrate Animal Subjects (if applicable, no page
                        limit)
                      </a>
                    </strong>
                  </li>{" "}
                  <li className="my-3">
                    <strong>
                      <a href="#">
                        Resubmission Modifications (if applicable, 2 pages)
                      </a>
                    </strong>
                  </li>{" "}
                  <li className="my-3">
                    <strong>
                      <a href="#">Biographical Sketch/Bibliography (5 pages)</a>
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* index 5 */}
          <div className="card mb-2">
            <header className="card-header p-0">
              <button
                type="button"
                className={`btn btn--select btn-plain btn-block ${openIndex === 5 ? "" : "collapsed"}`}
                aria-controls="accordion-6"
                aria-expanded="false"
                onClick={() =>
                  openIndex === 5 ? setOpenIndex(null) : setOpenIndex(5)
                }
              >
                Unstyled List Example, no label #2
              </button>
            </header>
            <div
              id="accordion-6"
              className="collapse"
              style={{
                display: openIndex === 5 ? "block" : "none",
              }}
            >
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="my-3">
                    <strong>
                      <a href="#">Research Plan 8 Pages</a>
                    </strong>
                  </li>{" "}
                  <li className="my-3">
                    <strong>
                      <a href="#">
                        Vertebrate Animal Subjects (if applicable, no page
                        limit)
                      </a>
                    </strong>
                  </li>{" "}
                  <li className="my-3">
                    <strong>
                      <a href="#">
                        Resubmission Modifications (if applicable, 2 pages)
                      </a>
                    </strong>
                  </li>{" "}
                  <li className="my-3">
                    <strong>
                      <a href="#">Biographical Sketch/Bibliography (5 pages)</a>
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
