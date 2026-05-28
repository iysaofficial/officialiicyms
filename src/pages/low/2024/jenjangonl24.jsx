import React from "react";
import Navcomps from '../../../components/Navcomps';
import Footercomps from "../../../components/Footercomps";

const Jenjangonl24 = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners 2024</h2>
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
                  href="https://drive.google.com/file/d/1SnxY-6nKovGSzfk8EpEA2E02CWfnaKMt/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  University
                </a>
                <a
                  href="https://drive.google.com/file/d/1HJPq9c74_ayY4PyOs4B0RvdMX_rESvJv/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Senior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1NXULLRlF14zB97peXFYK9CkTe--G7A8h/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Junior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1NtksVX61enWpGvBAQKJFHoHip-U37svp/view?usp=drive_link"
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

export default Jenjangonl24;
