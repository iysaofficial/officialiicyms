import React from "react";
import "../App.css";
import "../css/her.css";

function Herocomps() {
  return (
    <div className="hero-container">
      <video src="../videos/Video-3.mp4" autoPlay loop muted />
      <h1 className="fw-bold">IICYMS</h1>
      <p className="fw-bold text-center">
        International Invention Competition For Young Moslem Scientists
      </p>
      <div className="hero-btns">
        <div class="link-web mx-auto text-center">
          <a
            href="https://drive.google.com/file/d/1H4BBVosuBWIXiFImhl-3FulZ3dHij_1A/view?usp=sharing"
            target="_blank" rel="noreferrer"
            class="btn btn--primary text-center mt-5 fw-bold"
          >
            Guide Book
            <i class="&nbsp; fa-solid fa-book"></i>
          </a>
          <a
            href="/homeregist"
            rel="noreferrer"
            class="btn btn--accent text-center mt-5 fw-bold"
          >
            Registration
          </a>
        </div>
      </div>
    </div>
  );
}

export default Herocomps;
