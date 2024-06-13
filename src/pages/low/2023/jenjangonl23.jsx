import React from "react";
import Navcomps from '../../../components/Navcomps';
import Footercomps from "../../../components/Footercomps";

const Jenjangonl23 = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners 2023</h2>
              <div className="">
                <h3>Choose based on the Level of the Online event you are participating in</h3>
                <a
                  href="https://drive.google.com/file/d/1lyIBN-RMEt7y9voGJJ7x7h1OrJ9CzgTW/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Special Award{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1YbfgjdmUbn7tT3czwaa43kX7gTN6Ab4Q/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Public
                </a>
                <a
                  href="https://drive.google.com/file/d/1h9zlC9EWYip5XpQAeDqDCrX0RUlqHVqL/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  University
                </a>
                <a
                  href="https://drive.google.com/file/d/1tZS2vWY5mIZxMXMccJEQbX08SGfOOpF0/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Senior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1fXYGUG6B9kgv29b8tW_p8dFn6h3GR3tc/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  Junior High School
                </a>
                <a
                  href="https://drive.google.com/file/d/1nf_4ogRhEZvpnN3FVZ0_oyYEdYdyPjxI/view?usp=sharing"
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

export default Jenjangonl23;
