import "../App.css";
import Header from "../components/Header/Header";
// import ImageSlider from "../components/ImageSlider/ImageSlider";
import Footer from "../components/Footer";
// import All from "../components/All";
import AllFetch from "../components/AllFetch";
function AllMovies() {
  return (
    <div >
        <Header/>
        <AllFetch/>
        <Footer/>
    </div>
  );
}
export default AllMovies;