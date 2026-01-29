import Navcomps from '../../components/Navcomps';
import Footercomps from '../../components/Footercomps';
import '../../css/Registration.css'
import { internationalOfflineTerms, internationalOnlineTerms } from '../../pages/data/terms';
import { useState, useEffect } from "react";

function HomeInter() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set the redirect link
    setTermsContent(terms); // Set the terms content according to the choice
    setShowModal(true); // Show the modal
  };


  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink; // Redirect to the chosen registration page
    } else {
      alert("Please agree to the Terms & Conditions to proceed.");
    }
  };
  
  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true); // Set status sudah diterima
    }
  }, []);

  return (
    <>
      <Navcomps />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM FOR INTERNATIONAL PARTICIPANTS
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Competition for Registration IICYMS 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() => handleOpenModal("/interonline", internationalOnlineTerms)}
            >
              Online Competition{" "}<i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() => handleOpenModal("/interoffline", internationalOfflineTerms)}
            >
              Offline Competition{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-4xl">Terms & Conditions</h2>
            <div>{termsContent}</div> {/* Dynamic content */}
            <div className="checkbox mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms"> I agree to the Terms & Conditions above</label>
            </div>
            <div className="modal-actions">
              <button
                className="btn-regist btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Back
              </button>
              <button className="btn-regist btn-primary" onClick={handleAccept}>
                Accept & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
      <Footercomps />
    </>
  );
}

export default HomeInter;
