import "../App.css";
import Header from "../components/Header/Header";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Recommended from "../components/Recommended/Recommended";
import Premiere from "../components/Premiere";
import Footer from "../components/Footer";

function Home() {
  return (
    <div >
        <Header/>
        <ImageSlider/>
        <Recommended/>
        <Premiere/>
        <Footer/>
    </div>
  );
}
export default Home;