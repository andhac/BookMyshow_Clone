
import './App.css';
// import Header from "./components/Header/Header";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
// import Recommended from "./components/Recommended";
// import Premiere from "./components/Premiere";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllMovies from "./pages/AllMovies";
import Param from "./pages/Param";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/mov" element={<AllMovies/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/mov/:movId" element={<Param/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
