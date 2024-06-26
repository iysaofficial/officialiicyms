import "../css/abo.css";

const Timevenue = () => {
  return (
    <>
      <section id="about" className="hero-section">
        <div className="back">
          <div className="container">
            <div className="row ">
              <div className="col-md-6  hero-image text-center">
                <img src="../images/venue.jpg" className="img-fluid"></img>
                <a className="font-bold">
                  Venue Location:{" "}
                  <a
                    href="https://maps.app.goo.gl/NtswJq1axsnzZtCFA"
                    target="_blank"
                  >
                    Click Here
                  </a>
                </a>
              </div>
              <div className="col-md-6  hero-image text-center mt-5">
                <img src="../images/time.jpg" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timevenue;
