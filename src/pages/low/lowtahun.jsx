import React from "react";
import Navcomps from "../../components/Navcomps";
import Footercomps from "../../components/Footercomps";

const Lowtahun = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners</h2>
              <div className="">
                <h3>
                  Select by the year of the event you are participating in
                </h3>
                <a
                  href="https://drive.google.com/file/d/1K1TwudQXrPCUJBC5Xtl0Ehqq8_V14gIN/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  2024{" "}
                </a>
                <a href="/kategori23" className="btn btn--primary m-1">
                  2023{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1SBCFBTN0npsohL1QJ33mPplpx1nWB8bB/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  2022{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1mhA7cVX_6g0Ay4hNUXdU_yoTazb5C8dz/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  2021{" "}
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

export default Lowtahun;
