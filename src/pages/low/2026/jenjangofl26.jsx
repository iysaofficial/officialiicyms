import React from "react";
import Navcomps from '../../../components/Navcomps';
import Footercomps from "../../../components/Footercomps";

const Jenjangofl26 = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners 2025</h2>
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
                  href="https://drive.google.com/file/d/12QS2IkPCglz5hP3HvyzecxMAHroYu96j/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  University
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1XMTcFu6ofKDtoPPJ5soMnjz-CztrzzC8/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Senior High School
                </a> */}
                <a
                  href="https://drive.google.com/file/d/12XjEbMYaPNALv41xsnOSzc_pW6lQbmrC/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Secondary School
                </a>
                <a
                  href="https://drive.google.com/file/d/1od_a-qVvupZ2aiEDRRLJTM8PbOf_fAFl/view?usp=sharing"
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

export default Jenjangofl26;

