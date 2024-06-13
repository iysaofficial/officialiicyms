import Navcomps from '../../components/Navcomps';
import News from '../../components/News';
import Footercomps from "../../components/Footercomps";

function listnews() {
    return (  
      <div>
        <Navcomps></Navcomps>
        <News></News>
        <Footercomps></Footercomps>
      </div>
    );
  }
  
export default listnews;