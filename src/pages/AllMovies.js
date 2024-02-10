import "../App.css";
import Header from "../components/Header/Header";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Footer from "../components/Footer";
import All from "../components/All";
function AllMovies() {
  return (
    <div >
        <Header/>
        <All/>
        <Footer/>
    </div>
  );
}
export default AllMovies;