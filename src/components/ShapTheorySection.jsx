import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdb-react-ui-kit";
import { MDBTooltip } from "mdb-react-ui-kit";

function ShapTheorySection() {
  return (
    <div>
      <div className="space"></div>
      <div className="content-subsection">
        <h3>Theory</h3>
        <div className="theory-big">
          <div className="theory-left theory-horizontal-section">
            <MDBTooltip
              wrapperProps={{ color: "white" }}
              wrapperClass="tooltip-section"
              placement="bottom"
              title={<>Shapley value for feature i</>}
            >
              <p className="hoverable">
                &#632;<sub>i</sub>
              </p>
            </MDBTooltip>

            <p>(</p>

            <MDBTooltip
              wrapperProps={{ color: "white" }}
              wrapperClass="tooltip-section"
              placement="bottom"
              title={<>blackbox model</>}
            >
              <p className="hoverable">f</p>
            </MDBTooltip>

            <p>,</p>

            <MDBTooltip
              wrapperProps={{ color: "white" }}
              wrapperClass="tooltip-section"
              placement="bottom"
              title={<>input data point</>}
              //   title={
              //     <>
              //       <em>Tooltip</em> <u>with</u> <b>HTML</b>
              //     </>
              //   }
            >
              <p className="hoverable">x</p>
            </MDBTooltip>

            <p>)</p>
          </div>
          <div className="theory-equals">
            <p>=</p>
          </div>
          <div className="theory-right theory-horizontal-section">
            <div className="theory-summation theory-vertical-section">
              <h2 className="sigma">&#8721;</h2>
              <div className="theory-horizontal-section">
                <p>z&#8242;</p>
                <p>&#x2286;</p>
                <p>x&#8242;</p>
              </div>
            </div>

            <MDBTooltip
              wrapperProps={{ color: "white" }}
              wrapperClass="tooltip-section"
              placement="bottom"
              title={
                <>
                  Weighting of the contribution. Bigger subsets or smaller
                  subsets are weighted more.
                </>
              }
            >
              <div className="theory-weight theory-vertical-section">
                <div className="theory-weight-top theory-horizontal-section">
                  <p>|z'|</p>
                  <p>!</p>
                  <p>(M-|z'|-1)!</p>
                </div>

                <div className="division-line"></div>

                <div className="theory-weight-top theory-horizontal-section">
                  <p>M!</p>
                </div>
              </div>
            </MDBTooltip>

            <div className="theory-contribution theory-horizontal-section">
              <p>[</p>
              <MDBTooltip
                wrapperProps={{ color: "white" }}
                wrapperClass="tooltip-section"
                placement="bottom"
                title={
                  <>
                    Weighting of the contribution. Bigger subsets or smaller
                    subsets are weighted more.
                  </>
                }
              >
                <div className="theory-contribution-subset theory-horizontal-section">
                  <p>
                    f<sub>x</sub>(
                  </p>
                  <p>z'</p>
                  <p>)</p>
                </div>
              </MDBTooltip>
              <p>-</p>
              <MDBTooltip
                wrapperProps={{ color: "white" }}
                wrapperClass="tooltip-section"
                placement="bottom"
                title={
                  <>
                    Weighting of the contribution. Bigger subsets or smaller
                    subsets are weighted more.
                  </>
                }
              >
                <div className="theory-contribution-subset-no-i theory-horizontal-section">
                  <p>
                    f<sub>x</sub>(
                  </p>
                  <p>z'/i</p>
                  <p>)</p>
                </div>
              </MDBTooltip>
              <p>]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapTheorySection;
