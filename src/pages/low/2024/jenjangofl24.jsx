import React from "react";
import Navcomps from '../../../components/Navcomps';
import Footercomps from "../../../components/Footercomps";

const Jenjangofl24 = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners 2024</h2>
              <div className="">
                <h3>Choose based on the Level of the Offline event you are participating in</h3>
                {/* <a
                  href="https://drive.google.com/file/d/1525Cc4OJQ4XfMQdRDipjaQtLzvWlb_IQ/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Special Award{" "}
                </a> */}
                <a
                  href="https://drive.google.com/file/d/1tyLUUp5XsQh9c0BizmmBtHYsDRAvvfa2/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  University
                </a>
                <a
                  href="https://drive.google.com/file/d/1HrWFoTNVCTTVRC2NPvdS4Z6RHjP9dVY0/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Senior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1yFQ2WsTrEZZl9h933MreI7h2YY_c5GPV/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Junior High School
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1hex-tJocFwtzGHtly1jPPmNeYQAdT4P9/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Elementary School
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footercomps />
    </>
  );
};

export default Jenjangofl24;
