import React from "react";
import Navcomps from '../../../components/Navcomps';
import Footercomps from "../../../components/Footercomps";

const Kategori23 = () => {
  return (
    <>
      <Navcomps />
      <section className="low-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>List of Winners 2023</h2>
              <div className="">
                <h3>Choose based on the Category of the event you are participating in</h3>
                <a
                  href="/jenjangofl23"
                  className="btn btn--primary m-1"
                >
                  IICYMS OFFLINE
                </a>
                <a
                  href="/jenjangonl23"
                  className="btn btn--primary m-1"
                >
                  IICYMS ONLINE
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

export default Kategori23;
