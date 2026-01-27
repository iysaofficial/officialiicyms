import Navcomps from '../../components/Navcomps';
import Footercomps from '../../components/Footercomps';
import '../../css/Registration.css'
import { indonesiaOfflineTerms, indonesiaOnlineTerms } from '../../pages/data/terms';
import { useState, useEffect } from "react";


function HomeIndo() {
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
      sessionStorage.setItem("termsAccepted", "true"); // Save acceptance status in sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Please agree to the Terms & Conditions to proceed.");
    }
  };
  
  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true); // Set status as accepted
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
                REGISTRATION FORM FOR INDONESIAN PARTICIPANTS
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Competition Category for IICYMS 2025 Registration
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <button
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() => handleOpenModal("indoonline", indonesiaOnlineTerms)}
            >
              Online Competition{" "}<i className="fa-solid fa-earth-americas"></i>
            </button>
            <button
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() => handleOpenModal("indooffline", indonesiaOfflineTerms)}
            >
              Offline Competition{" "}<i className="fa-solid fa-earth-americas"></i>
            </button>
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

export default HomeIndo;
