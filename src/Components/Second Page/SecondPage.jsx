import SpotlightCarousel from "./SecondPageCarousel.jsx"
import DATA from "./CarouselData.js";
import NextButton from "../NextButton.jsx";
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";

export default function SecondPage(){
    return(
        <div className="second-bg">
            <h1 className="first-heading second-heading">
                {/* Some Heading */}
                Moments of You — My Favorite View
                </h1>
            <SpotlightCarousel CARDS={DATA}/>
            <NextButton nextDesti={"third"}/>
            <div className="Notice">
                Use&nbsp;
                <FaArrowLeft className="inline" />&nbsp;
                and&nbsp;
                <FaArrowRight className="inline" />&nbsp;
                to navigate between images.
            </div>
        </div>
    )
}