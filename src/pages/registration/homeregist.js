import Navcomps from '../../components/Navcomps';
import Footercomps from '../../components/Footercomps';
import '../../css/Registration.css'

function HomeRegist() {
  return (
    <>
      <Navcomps />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Participant for Registration IICYMS
                2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a href="/homeindo" className="btn-regist btn-action text-center me-lg-5 m-2">
              Indonesia Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
            <a href="/homeinter" className="btn-regist btn-action text-center me-lg-5 m-2">
              International Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>
      <Footercomps />
    </>
  );
}

export default HomeRegist;
