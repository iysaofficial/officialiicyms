import React from "react";
import Navcomps from "../../components/Navcomps";
import Footercomps from "../../components/Footercomps";

const Certtahun = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>Certificate Supervisor</h2>
              <div className="">
                <h3>
                  Select by the year of the event you are participating in
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/1CET15ObsWd7LrKmIVhqyOwoTGVcaPty9?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  2026 Offline{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1-9vLdPLPuBWgMrxM4nHzBhBMjNeJ1lUF?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  2026 Online{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1OdvN-axePmBr_D3XfROZgrGCNHOH6BYX?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  2025{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1sQ3E9G7PhbGmtAgF8YZzS9YZNvOZQBUq?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary m-1"
                >
                  2024{" "}
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

export default Certtahun;
