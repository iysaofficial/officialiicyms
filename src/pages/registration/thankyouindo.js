import { useLocation } from "react-router-dom";
import Navcomps from "../../components/Navcomps";
import Footercomps from "../../components/Footercomps";

function ThankYouIndo() {
  const { state } = useLocation();

  return (
    <>
      <Navcomps />
      <section className="thankyou">
        <div className="wrapper">
          <h1>Terima Kasih telah mendaftar!</h1>
          <p>
            Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.
          </p>

          <table className="thankyou-table">
            <tbody>
              <tr>
                <td>
                  <strong>Anggota Tim</strong>
                </td>
                <td>{state?.namaLengkap}</td>
              </tr>
              <tr>
                <td>
                  <strong>Nama Sekolah</strong>
                </td>
                <td>{state?.namasekolah}</td>
              </tr>
              <tr>
                <td>
                  <strong>Judul Proyek</strong>
                </td>
                <td>{state?.projectTitle}</td>
              </tr>
              <tr>
                <td>
                  <strong>Kategori Kompetisi</strong>
                </td>
                <td>{state?.category}</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>
              *Jika data muncul, tangkap layar halaman ini sebagai bukti
              pendaftaran berhasil
            </strong>
          </p>

          <a href="/homeregist" className="btn-regist btn-action">
            Kembali ke menu pendaftaran
          </a>
        </div>
      </section>
      <Footercomps />
    </>
  );
}

export default ThankYouIndo;
