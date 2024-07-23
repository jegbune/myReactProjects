import Home from "./Components/Home";
import Index from "./Components/Accordion/Index";
import Accordion from "./Components/Accordion/Accordion";
import RandomIndex from "./Components/RandomColor/Index";
import RandomColor from "./Components/RandomColor/RandomColor";
import StarRating from "./Components/StarRating/StarRating";
import RandomColorGenerator from "./Components/RandomColor/RandomColorGenerator";
import ImageSlider from "./Components/Image-Slider/ImageSlider";
import { Route, Routes } from "react-router-dom";
import LoadMoreData from "./Components/Load-more-data/LoadMoreData";
import TreeView from "./Components/Tree-view/Index";
import menus from "./Components/Tree-view/data";
import QRCodeGenerator from "./Components/QR-code-generator";
import LightDarkMode from "./Components/Light-Dark-Mode/Index";
import ScrollIndicator from "./Components/Scroll-Indicator/Index";

function App() {
  return(
    <div>
      <Routes>
        <Route path="/myReactProjects" element={<Home />} />
        <Route path="/Accordian" element={<Index />} />
        <Route path="/RandomColor" element={<RandomColor />} />
        <Route path="/StarRating" element={<StarRating noOfStars={10} />} />
        <Route path="/ImageSlider" element={<ImageSlider url={'https://picsum.photos/v2/list/'} limit={10} page={1} />} />
        <Route path="/LoadMoreData" element={<LoadMoreData />} />
        <Route path="/treeView" element={<TreeView menus={menus} />} />
        <Route path="/QRCode" element={<QRCodeGenerator />} />
        <Route path="/LightDarkmode" element={<LightDarkMode />} />
        <Route path="/ScrollIndicator" element={<ScrollIndicator url='https://dummyjson.com/products?limit=100' />} />
        
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

      {/* load more products component */}
      {/* <LoadMoreData /> */}
     
      {/* Tree view component/ menu UI component/ recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}
      
      {/* QRCode component */}
      {/* <QRCodeGenerator /> */}
      
      {/* Light and Dark theme switch */}
      {/* <LIghtDarkMode /> */}

      {/* ScrollIndicator component */}
      {/* <ScrollIndicator  url='https://dummyjson.com/products?limit=100' /> */}

    </div>
  )
}

export default App;
