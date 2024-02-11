import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
// import SingleMovie from "../components/SingleMovie";
import SingleFetch from "../components/SingleFetch";
function Param(){
    return(
       <div>
        <Header/>
        <SingleFetch/>
        <Footer/>
       </div>
    )
}
export default Param;