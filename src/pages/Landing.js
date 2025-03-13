import Navcomps from "../components/Navcomps";
import Herocomps from "../components/Herocomps";
import Aboutcomps from "../components/Aboutcomps";
import Categoriescomps from "../components/Categoriescomps";
import Howregistcomps from "../components/Howregistcomp";
import Organizedcomps from "../components/Organizedcomps";
import Moviecomps from "../components/Moviecomps";
import Footercomps from "../components/Footercomps";

import Timevenue from "../components/Timevenue";

// Import CSS
import "../css/styles.css"

function Landing() {
  return (
    <div>
      < Navcomps />
      < Herocomps />
      < Aboutcomps />
      < Categoriescomps />
      {/* <Timevenue /> */}
      < Howregistcomps />
      < Organizedcomps />
      < Moviecomps />
      < Footercomps />
    </div>
  );
}

export default Landing;
