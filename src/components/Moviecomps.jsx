import React from "react";

import "../css/mov.css";

const Moviecomps = () => {
  return (
    <div id="rs-about" className="rs-about sec-spacer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title text-center wow fadeIn">
              <h3 className="fw-bold">AFTER MOVIE IICYMS 2024</h3>
              <div className="underline1"></div>
              <div className="underline2 mb-5"></div>
            </div>
          </div>
        </div>
        <div className="how row">
          <div className="col-lg-12 col-md-12">
            <iframe
              width="1300"
              height="505"
              src="https://www.youtube.com/embed/Zo0nH4qjCkY?si=dZCqZ-F-7G-cPnSA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviecomps;
