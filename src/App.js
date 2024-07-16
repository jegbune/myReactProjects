import Home from "./Components/Projects/Home.js";
import Index from "./Components/Projects/Accordion/Index";
import Accordion from "./Components/Projects/Accordion/Accordion";
import RandomIndex from "./Components/Projects/RandomColor/Index.js";
import RandomColor from "./Components/Projects/RandomColor/RandomColor.js";
import StarRating from "./Components/Projects/StarRating/StarRating.js";
import RandomColorGenerator from "./Components/Projects/RandomColor/RandomColorGenerator.js";
import ImageSlider from "./Components/Projects/Image-Slider/ImageSlider.js";
import { Route, Routes } from "react-router-dom";
function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accordian" element={<Index />} />
        <Route path="/RandomColor" element={<RandomColor />} />
        <Route path="/StarRating" element={<StarRating noOfStars={10} />} />
        <Route path="/ImageSlider" element={<ImageSlider url={'https://picsum.photos/v2/list/'} limit={10} page={1} />} />
        
      </Routes>
      {/* Accordian Component */}
      {/* <Index /> */}
      {/* <Accordion /> */}

      {/* Random Color Component */}
      {/* <RandomIndex /> */}
      {/* <RandomColor /> */}
      {/* <RandomColorGenerator /> */}
      
      {/* Rating Star Component */}
      {/* <StarRating noOfStars ={10} />  */}
      
      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list/'} limit={10} page={1} /> */}

    </div>
  )
}

export default App;
