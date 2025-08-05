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
                  href="https://drive.google.com/file/d/1eL5WcgUUmWag1ZGjLAqj6euYqdBcV-7P/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  University
                </a>
                <a
                  href="https://drive.google.com/file/d/1XMTcFu6ofKDtoPPJ5soMnjz-CztrzzC8/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Senior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1_nXYZz244m6MlMheh9m66nrlVLlGO7Is/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Junior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/16AgAC8CnAIlHXNbEItFxDhdFYA91po3T/view?usp=sharing"
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
