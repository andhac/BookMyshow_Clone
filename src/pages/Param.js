import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SingleMovie from "../components/SingleMovie";

function Param(){
    return(
       <div>
        <Header/>

        <SingleMovie/>
        <Footer/>
       </div>
    )
}
export default Param;