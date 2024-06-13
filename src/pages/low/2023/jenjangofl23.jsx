import React from "react";
import Navcomps from '../../../components/Navcomps';
import Footercomps from "../../../components/Footercomps";

const Jenjangofl23 = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners 2023</h2>
              <div className="">
                <h3>Choose based on the Level of the Offline event you are participating in</h3>
                <a
                  href="https://drive.google.com/file/d/1525Cc4OJQ4XfMQdRDipjaQtLzvWlb_IQ/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Special Award{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1Uvd2-o797ddjYf2rZqabFgTy9Bh6Lnl-/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  University
                </a>
                <a
                  href="https://drive.google.com/file/d/1npDW4xRDKc1UDWK_tEDNIhlkMql0qsPc/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Senior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1OhygCVF7zqpvVBF9689AMVGhHIvaTyAO/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Junior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1hex-tJocFwtzGHtly1jPPmNeYQAdT4P9/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Elementary School
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footercomps />
    </>
  );
};

export default Jenjangofl23;
