import "../css/fot.css";

const Footercomps = () => {
  return (
    <>
      <footer id="rs-footer" className="bg-footer rs-footer">
        <div className="fot container">
          <div>
            <div className="row footer-contact-desc">
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-map-marker"></i>
                  <h4 className="contact-title">Address</h4>
                  <a href="https://maps.app.goo.gl/TqKMxoUgbdf6XEgn7" target="_blank" className="contact-desc">
                    Jalan Kemang No. 63, RT. 3 RW. 6<br />
                    Pasir Putih Sawangan, Kota Depok,
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-phone"></i>
                  <h4 className="contact-title">Phone Number</h4>
                  <a href="wa.me/+6281770914129" className="contact-desc">+62 817-7091-4129</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-map-marker"></i>
                  <h4 className="contact-title">Email Address</h4>
                  <a href="mailto:iicmys.iysa@gmail.com" className="contact-desc">iicmys.iysa@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="foter container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="about-widget">
                  <img src="../logo/iicyms2.png" alt="Footer Logo" />
                  <p>
                    INTERNATIONAL INVENTION COMPETITION FOR YOUNG MOSLEM
                    SCIENTIST (I2CYMS), a program of Indonesian Young Scientist
                    Association (IYSA) collaboration with Universitas Komputer
                    Indonesia (UNIKOM)
                  </p>
                </div>
              </div>
              

              <div className="col-lg-4 col-md-12">
                <h5 className="footer-title">OUR SITEMAP</h5>
                <ul className="sitemap-widget2  ">
                  <li className="active">
                    <a href="index.html">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/About">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      About
                    </a>
                  </li>

                  <li>
                    <a href="event.html">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      News
                    </a>
                  </li>
                  <li>
                    <a href="event.html">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a href="contact.html">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 ">
                <h5 className="footer-title2 ">Information Link</h5>
                <ul className="sitemap-widget2  ">
                  <li className="active">
                    <a href="https://www.iysa.or.id/" target="_blank">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Our Main Website
                    </a>
                  </li>
                  <li>
                    <a href="https://registrasi-iicyms-2024.vercel.app/">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Link Registrasi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-share">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/people/Iicyms-Iysa/pfbid02kDFtrArHewkZr3br2f5Br6Qjz3w2Q3MgQmpgVx1ptZ3bhioe16SNALPreUbHwQ8gl/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw?reload=9&app=desktop"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/iicyms_official/?hl=en"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <p>
                © 2023 <a href="#">IYSA IT</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footercomps;
