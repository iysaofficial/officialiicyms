import Navcomps from "../../components/Navcomps";
import Footercomps from "../../components/Footercomps";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IndonesiaOffline() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180; // maximum character limit
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const [selectedNamaSekolah, setselectedNamaSekolah] = useState("");
  const maxSchoolChars = 500; // maximum character limit
  const maxProjectChars = 160; // maximum character limit
  const [selectedCategory, setSelectedCategory] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  const handleInputNameSchoolChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxSchoolChars) {
      setselectedNamaSekolah(value);
    }
  };

  const handleInputProjectChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxProjectChars) {
      setselectedMaxProject(value);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    // Logic to determine the price based on the selected category
    switch (value) {
      case "International Invention Competition For Young Moslem Scientists - Offline Competition":
        break;
      case "International Invention Competition For Young Moslem Scientists - Offline Competition + Excursion":
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const termsAccepted = sessionStorage.getItem("termsAccepted");

    if (!termsAccepted) {
      alert("You must agree to the Terms & Conditions first.");
      navigate("/homeindo"); // Navigate to the HomeIndo page
    }
  }, [navigate]);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx0X5F22dPlGDEPkBvW0SpUeYdD6ZuZy9QnJ5eOW_hjErFJ6wI-5zDnvaJyQD_LmbNPqw/exec";

    useEffect(() => {
      const form = document.forms["regist-form"];
  
      if (form) {
        const handleSubmit = async (e) => {
          
          e.preventDefault();
          setShowModal(true);
          setCanClick(false);
          setCountdown(5); // Reset countdown when modal appears
  
          let count = 5;
          const interval = setInterval(() => {
            count -= 1;
            setCountdown(count);
  
            if (count <= 1) {
              clearInterval(interval); // Stop the countdown at 1
              setCanClick(true);
            }
          }, 1000);
        };
  
        form.addEventListener("submit", handleSubmit);
        return () => {
          form.removeEventListener("submit", handleSubmit);
        };
      }
    }, []);

  const handleConfirmSubmit = async () => {
    setShowModal(false); // Close modal
    const form = document.forms["regist-form"];

    if (!form) return;

    setIsLoading(true);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setStatusMessage("Data sent successfully!");

        // Get data before reset
        const formData = {
          namaLengkap: selectedMaxNamaLengkap,
          projectTitle: selectedMaxProject,
          category: selectedCategory,
          namasekolah: selectedNamaSekolah,
        };

        form.reset();
        setTimeout(() => {
          navigate("/thankyouinter", { state: formData });
        }, 1000);
      } else {
        setStatusMessage("An error occurred while sending data.");
      }
    } catch (error) {
      setStatusMessage("An error occurred while sending data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navcomps />
      <section className="registration-section">
        <div class="container">
          <div class="content">
            <div class="sub">REGISTRATION FORM</div>
            <br />
            <h1 class="garis-bawah">&nbsp;</h1>
            <br />
            <h4 className="text-xl">
              HELLO IICYMS 2025 PARTICIPANTS, Please pay attention to the
              following information before filling out the registration form :
            </h4>
            <br />
            <p>
              1. Please fill in the required data correctly and make sure
              there are no spelling errors. Also, make sure that the data
              sent is final and has not changed.
            </p>
            <p>
              2. After making sure the data is correct, you can click the
              <span className="fw-bold"> "SEND"</span> button just
              once. If the data has been sent successfully, you will be
              moved to another page.
            </p>
            <p>
              3. There will be an email informing that the registration has
              been received which will be sent to the team leader's email
              address, and the file will be validated by our team. Please be
              patient and wait a maximum of 3 days after the registration
              time, the Letter of Acceptance (LOA) will be sent to the team
              leader's email address.
            </p>
            <br />
            {showModal && (
              <div className="modal-overlay-submit">
                <div className="modal-submit text-lg-center text-md-center">
                  <h2 className="text-center">⚠️ATTENTION!</h2>
                  <p>
                    Data that has been sent cannot be changed. The committee
                    will use the last data entered for printing the
                    certificate.
                    <br />
                    <b>MAKE SURE ALL DATA IS CORRECT!</b>
                    <br />
                    <b>
                      DO NOT RE-REGISTER WITH THE SAME DATA REPEATEDLY!
                    </b>
                  </p>
                  <div className="modal-buttons-submit">
                    <button onClick={() => setShowModal(false)}>Back</button>
                    <button
                      onClick={handleConfirmSubmit}
                      disabled={!canClick || isLoading}
                    >
                      {isLoading
                        ? "Submitting..."
                        : canClick
                        ? "Continue"
                        : `Please wait... ${countdown}`}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form name="regist-form">
              <h1 className="text-sm md:text-lg lg:text-5xl">BIODATA</h1>
              <h1 className="garis-bawah">&nbsp;</h1>
              <div className="user-details">
                <div className="input-box">
                  <label className="form-label" value="Indonesian Participant">
                    Participant Category
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PARTICIPANT"
                    name="CATEGORY_PARTICIPANT"
                    className="form-control"
                    placeholder="Choose Categories Participant"
                    value="INDONESIAN PARTICIPANT"
                    readOnly
                  />
                </div>
                <div class="input-box">
                  <label for="CATEGORY_COMPETITION" class="form-label">
                    Competition Category
                  </label>
                  <select
                    type="text"
                    id="CATEGORY_COMPETITION"
                    name="CATEGORY_COMPETITION"
                    class="form-control"
                    placeholder="Choose Category Competition "
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="">--Select Competition Category--</option>
                    <option value="International Invention Competition For Young Moslem Scientists - Offline Competition">
                      Offline Competition
                    </option>
                    <option value="International Invention Competition For Young Moslem Scientists - Offline Competition + Excursion">
                      Offline Competition + Excursion
                    </option>
                  </select>
                </div>
              </div>

              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_LENGKAP" className="form-label">
                    Team Leader & Member Name
                  </label>
                  <label>
                    <p>
                      Enter the name of the team leader and members with the
                      team leader's name at the beginning, in the following
                      format:
                    </p>
                    <p>Note: a maximum of 5 members + 1 team leader</p>
                    <h6>Kamal Putra</h6>
                    <h6>Ranu Ramadhan</h6>
                    <h6>Irsyad Zaidan</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_LENGKAP"
                    name="NAMA_LENGKAP"
                    className="form-control"
                    placeholder="Enter Leader & Member Name"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                  ></textarea>
                  <p>
                    {selectedMaxNamaLengkap.length} / {maxNameChars} character
                  </p>
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_WHATSAPP" className="form-label">
                    Team Leader's WhatsApp Number
                  </label>
                  <label>
                    <p>
                      Please write with the phone code, for example: (country
                      code) (phone number) +62 81770914xxxx
                    </p>
                    <p>
                      Notes: Please fill in the team leader's number
                      correctly, to be included in the group
                    </p>
                  </label>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="form-control"
                    placeholder="Enter the Team Leader's WhatsApp Number"
                    required
                  />
                </div>
                <div class="input-box">
                  <label for="LEADER_EMAIL" class="form-label">
                    Team Leader's Email Address
                  </label>
                  <label>
                    <p>
                      Notes: Please fill in the email correctly, the LOA will
                      be sent via the team leader's email address that is
                      filled in.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    class="form-control"
                    placeholder="Enter the Team Leader's Email Address"
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="NISN_NIM" className="form-label">
                    Student ID Number (NISN/NIM) of Leader & Members
                  </label>
                  <label>
                    <p>
                      Notes: Enter the NISN / NIM according to the order of
                      the names of the team leader and members, in the
                      following format:
                    </p>
                    <h6>231700</h6>
                    <h6>241700</h6>
                    <h6>251700</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NISN_NIM"
                    name="NISN_NIM"
                    className="form-control"
                    placeholder="Enter the NISN / NIM of the Team Leader & Members"
                    required
                  ></textarea>
                </div>
              </div>

              {/* DATA SEKOLAH START */}
              {/* DATA SEKOLAH START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">SCHOOL DATA</h1>
              <h1 className="garis-bawah">&nbsp;</h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_SEKOLAH" className="form-label">
                    School/University Name
                  </label>
                  <label>
                    <p>
                      Notes: Enter the school name in a format that
                      corresponds to the order of the names of the team
                      leader and members from their respective schools, in
                      the following format:
                    </p>
                    <h6>SMA CERIA</h6>
                    <h6>SMA BAHAGIA</h6>
                    <h6>SMA TADIKA MESRA</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_SEKOLAH"
                    name="NAMA_SEKOLAH"
                    className="form-control"
                    placeholder="Enter your School/University Name"
                    required
                    value={selectedNamaSekolah}
                    onChange={handleInputNameSchoolChange}
                  ></textarea>
                  <p>
                    {selectedNamaSekolah.length} / {maxSchoolChars} character
                  </p>
                </div>
                <div className="input-box">
                  <label for="NPSN" className="form-label">
                    National School Identification Number (NPSN)
                  </label>
                  <label>
                    <p>
                      Notes: Enter the NPSN if you are still in school
                      according to the order of the names of the team leader
                      and members, in the following format:
                    </p>
                    <h6>1201301</h6>
                    <h6>1302402</h6>
                    <h6>1020100</h6>
                  </label>
                  <textarea
                    type="number"
                    id="NPSN"
                    name="NPSN"
                    className="form-control"
                    placeholder="Enter the National School Identification Number (NPSN)"
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="GRADE" className="form-label">
                    Education Level{" "}
                  </label>
                  <select
                    type="text"
                    id="GRADE"
                    name="GRADE"
                    className="form-control"
                    placeholder="Choose Grade"
                    required
                  >
                    <option value="">--Select Your Education Level--</option>
                    <option value="Elementary School">Elementary School</option>
                    <option value="Junior High School">
                      Junior High School
                    </option>
                    <option value="Senior High School">
                      Senior High School
                    </option>
                    <option value="University">University</option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="PROVINCE" className="form-label">
                    Province
                  </label>
                  <input
                    type="text"
                    id="PROVINCE"
                    name="PROVINCE"
                    className="form-control"
                    placeholder="Enter Your Province"
                    required
                  />
                </div>
              </div>
              {/* DATA SEKOLAH END */}
              {/* DATA SEKOLAH END */}

              {/* DATA PEMBIMBING START */}
              {/* DATA PEMBIMBING START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">
                SUPERVISOR DATA
              </h1>
              <h1 className="garis-bawah">&nbsp;</h1>
              <div className="user-details">
                <div class="input-box">
                  <label for="NAME_SUPERVISOR" class="form-label">
                    Teacher/Supervisor Name
                  </label>
                  <textarea
                    type="text"
                    id="NAME_SUPERVISOR"
                    name="NAME_SUPERVISOR"
                    class="form-control"
                    placeholder="Enter Teacher/Supervisor Name"
                    required
                  ></textarea>
                </div>

                <div className="input-box">
                  <label
                    for="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-label"
                  >
                    Teacher/Supervisor's WhatsApp Number
                  </label>
                  <label>
                    <p>
                      Please write with the phone code, for example: (country
                      code) (phone number) +62 81770914xxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="WHATSAPP_NUMBER_SUPERVISOR"
                    name="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-control"
                    placeholder="Enter Teacher/Supervisor's WhatsApp Number"
                    required
                  />
                </div>

                <div className="input-box">
                  <label for="EMAIL_TEACHER_SUPERVISOR" className="form-label">
                    Teacher/Supervisor's Email Address
                  </label>
                  <input
                    type="email"
                    id="EMAIL_TEACHER_SUPERVISOR"
                    name="EMAIL_TEACHER_SUPERVISOR"
                    className="form-control"
                    placeholder="Teacher/Supervisor's Email Address"
                    required
                  />
                </div>
              </div>
              {/* DATA PEMBIMBING END */}
              {/* DATA PEMBIMBING END */}

              {/* DETAIL PROJECT START */}
              {/* DETAIL PROJECT START */}
              <div className="">
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  PROJECT DETAILS
                </h1>
                <h1 className="garis-bawah">&nbsp;</h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="PROJECT_TITLE" className="form-label">
                    Project Title
                  </label>
                  <label>
                    <p>
                      Notes: Please fill in the title data CORRECTLY, the
                      data entered cannot be changed!
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="PROJECT_TITLE"
                    name="PROJECT_TITLE"
                    className="form-control"
                    placeholder="Enter Your Project Title"
                    required
                    value={selectedMaxProject}
                    onChange={handleInputProjectChange}
                  ></textarea>
                  <p>
                    {selectedMaxProject.length} / {maxProjectChars} character
                  </p>
                </div>

                {/* Dropdown Kategori */}
                <div className="input-box">
                  <label htmlFor="CATEGORIES" className="form-label">
                    Category
                  </label>
                  <select
                    id="CATEGORIES"
                    name="CATEGORIES"
                    className="form-control"
                    placeholder="--Choose-- "
                    required
                  >
                    <option value="">--Select Category--</option>
                    <option value="Pure Science">Pure Science</option>
                    <option value="Social Science">
                      Social Science
                    </option>
                    <option value="Education">Education</option>
                    <option value="Science in Islam">
                      Science in Islam
                    </option>
                    <option value="Applied Life Science">Applied Life Science</option>
                  </select>
                </div>

                <div className="input-box">
                  <label for="YES_NO" className="form-label">
                    Has the project title ever participated in a previous
                    invention and innovation competition?
                  </label>
                  <select
                    type="text"
                    id="YES_NO"
                    name="YES_NO"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option>--Select--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="input-box">
                  <label
                    for="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-label"
                  >
                    If the project title has participated in other invention
                    and innovation competitions, please write down the name of
                    the competition
                  </label>
                  <textarea
                    type="text"
                    id="JUDUL_PERNAH_BERPATISIPASI"
                    name="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-control"
                    placeholder="Enter the Competition Name"
                  ></textarea>
                  <div className="mt-5" id="form_alerts"></div>
                </div>
              </div>
              {/* DETAIL PROJECT END */}
              {/* DETAIL PROJECT END */}

              {/* GENERAL INFORMATION START */}
              {/* GENERAL INFORMATION START */}
              <div className="">
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  GENERAL INFORMATION
                </h1>
                <h1 className="garis-bawah">&nbsp;</h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="COMPLETE_ADDRESS" className="form-label">
                    Full Address
                  </label>
                  <label>
                    <p>
                      Please write your full address (Street Name, House
                      Number, RT&RW, District, Regency, City, Province,
                      Postal Code)
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="COMPLETE_ADDRESS"
                    name="COMPLETE_ADDRESS"
                    className="form-control"
                    placeholder="Enter Your Full Address"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="INFORMATION_RESOURCES" className="form-label">
                    IICYMS 2025 Competition Information Source
                  </label>
                  <select
                    type="text"
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option value="">--Select Information Source--</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="IICYMS Instagram">IICYMS Instagram</option>
                    <option value="Supervisor/School">
                      Supervisor/School
                    </option>
                    <option value="IYSA FaceBook">IYSA FaceBook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="IICYMS Website">IICYMS Website</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="IICYMS Email">IICYMS Email</option>
                    <option value="Previous Event">Previous Event</option>
                    <option value="Lainnya">Others</option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="FILE" className="form-label">
                    If you get free registration from a previous event or
                    school visit, please attach proof of documentation{" "}
                  </label>
                  <input
                    type="url"
                    id="FILE"
                    name="FILE"
                    className="form-control"
                    placeholder="Upload Drive File Link"
                  />
                </div>
              </div>
              {/* GENERAL INFORMATION END */}
              {/* GENERAL INFORMATION END */}

              <div className="button">
                <input type="submit" value="SUBMIT" />
              </div>
            </form>
            {/* Loader and Status Message */}
            {isLoading && (
              <div className="overlay-loader">
                <div className="loader"></div>
                <div>
                  {statusMessage && (
                    <p className="status-message">{statusMessage}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footercomps />
    </>
  );
}

export default IndonesiaOffline;
