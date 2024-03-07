import React from "react";
import "../App.css";
import "../css/her.css";

function Herocomps() {
  return (
    <div className="hero-container">
      <video src="../videos/Video-3.mp4" autoPlay loop muted />
      <h1 className="fw-bold">IICYMS 2024</h1>
      <p className="fw-bold text-center">
        International Invention Competition For Young Moslem Scientists
      </p>
      <div className="hero-btns">
        <div class="link-web mx-auto text-center">
          <a
            href="https://drive.google.com/file/d/1nbgLgvHg8OTizLnvJVha3Wr8VwiM9irB/view?usp=sharing"
            target="_blank"
            class="btn btn--primary text-center mt-5 fw-bold"
          >
            Guide Book
            <i class="&nbsp; fa-solid fa-book"></i>
          </a>
          <a
            href="https://registrasi-iicyms-2024.vercel.app/"
            target="_blank"
            class="btn btn--accent text-center mt-5 fw-bold"
          >
            Open Registration
          </a>
        </div>
      </div>
    </div>
  );
}

export default Herocomps;
