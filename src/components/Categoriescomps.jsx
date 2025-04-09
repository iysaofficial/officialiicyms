import "../css/cat.css";

const Categoriescomps = () => {
  return (
    <>
      <div id="service">
        <div className="service-content">
          <div className="service-grid text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3 className="fw-bold">CATEGORY</h3>
                    <div className="underline1"></div>
                    <div className="underline2 mb-5"></div>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn mt-5">
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <i class="fa-solid fa-flask fa-6x"></i>
                    </div>
                    <div className="service-bottom">
                      <h3>Pure Science</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <i class="fa-solid fa-people-arrows fa-6x"></i>
                    </div>
                    <div className="service-bottom">
                      <h3>Social Science</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <i class="fa-solid fa-book-open-reader fa-6x"></i>
                    </div>
                    <div className="service-bottom">
                      <h3>Education</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <i class="fa-solid fa-book-quran fa-6x"></i>
                    </div>
                    <div className="service-bottom">
                      <h3>Science in Islam</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <i class="fa-solid fa-microscope fa-6x"></i>
                    </div>
                    <div className="service-bottom">
                      <h3>Applied Life Science.</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categoriescomps;
