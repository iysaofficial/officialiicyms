import React from "react";
import Navcomps from '../../../components/Navcomps';
import Footercomps from "../../../components/Footercomps";

const LoWOnl25 = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners 2025</h2>
              <div className="">
                <h3>Choose based on the Level of the Online event you are participating in</h3>
                {/* <a
                  href="https://drive.google.com/file/d/1lyIBN-RMEt7y9voGJJ7x7h1OrJ9CzgTW/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Special Award{" "}
                </a> */}
                {/* <a
                  href="https://drive.google.com/file/d/1YbfgjdmUbn7tT3czwaa43kX7gTN6Ab4Q/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Public
                </a> */}
                <a
                  href="https://drive.google.com/file/d/11SPeL4q24jDNtphjG1BE0cmLPy8090Zs/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  University
                </a>
                <a
                  href="https://drive.google.com/file/d/1EwhQZX8jDXGzk5145TLR2QTj9DfAnx2e/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Senior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1Awsh70M3t34w1mdWkCn-uZooxI6rFjkb/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Junior High School
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1nf_4ogRhEZvpnN3FVZ0_oyYEdYdyPjxI/view?usp=sharing"
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

export default LoWOnl25;
