import { useLocation } from "react-router-dom";
import Navcomps from "../../components/Navcomps";
import Footercomps from "../../components/Footercomps";

const Thankyouinter = () => {
  const { state } = useLocation();

  return (
    <>
    <Navcomps/>
      <section className="thankyou">
        <div className="wrapper">
          <h1>Thank You for Registering!</h1>
          <p>
            We appreciate your participation and look forward to your
            involvement.
          </p>

          <table className="thankyou-table">
            <tbody>
              <tr>
                <td>
                  <strong>Team Members</strong>
                </td>
                <td>{state?.namaLengkap}</td>
              </tr>
              <tr>
                <td>
                  <strong>School Name</strong>
                </td>
                <td>{state?.namasekolah}</td>
              </tr>
              <tr>
                <td>
                  <strong>Project Title</strong>
                </td>
                <td>{state?.projectTitle}</td>
              </tr>
              <tr>
                <td>
                  <strong>Competition Category</strong>
                </td>
                <td>{state?.category}</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>
              *If the data appears, take a screenshot of this page as proof of
              successful registration
            </strong>
          </p>

          <a href="/homeregist" className="btn-regist btn-action">
            Back to Registration Menu
          </a>
        </div>
      </section>
      <Footercomps/>
    </>
  );
};

export default Thankyouinter;
