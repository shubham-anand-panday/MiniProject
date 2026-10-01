import React from "react";
import { motion, LayoutGroup  } from "framer-motion";
import ExpandingBar from "./ExpandingBar";
import "./ThirdPage.css"
import NextButton from "../NextButton";
import OctImg1 from "../../assets/Photos/oct2024/p1.jpg"
import OctImg2 from "../../assets/Photos/oct2024/p2.jpg"
import OctImg3 from "../../assets/Photos/oct2024/p3.jpg"

import FebImg1 from "../../assets/Photos/feb2025/p1.jpg"
import FebImg2 from "../../assets/Photos/feb2025/p2.jpg"
import FebImg3 from "../../assets/Photos/feb2025/p3.jpg"

import JulyImg1 from "../../assets/Photos/july2025/p1.jpg"
import JulyImg2 from "../../assets/Photos/july2025/p2.jpg"
import JulyImg3 from "../../assets/Photos/july2025/p3.jpg"

const bars = [
    {
        date: "Oct 2024",
        // images: [
        //     "https://randomuser.me/api/portraits/men/46.jpg", 
        //     "https://randomuser.me/api/portraits/men/46.jpg", 
        //     "https://randomuser.me/api/portraits/men/46.jpg"
        // ],
        images: [
            OctImg1, 
            OctImg2, 
            OctImg3,
        ],
        text: "That first visit will always have a special place in my heart — your birthday, our first time seeing each other after so long. I still remember the excitement of meeting you, the way your smile made everything around us fade. Visiting the temple with you, laughing, talking, capturing little moments — it all felt so pure and perfect. Those photos remind me how lucky I am to have you — how even in silence, just being near you felt like peace. That trip was the beginning of so many beautiful memories we’ve made together.",
    },
    {
        date: "Feb 2025",
        // images: [
        //     "https://randomuser.me/api/portraits/men/46.jpg", 
        //     "https://randomuser.me/api/portraits/men/46.jpg", 
        //     "https://randomuser.me/api/portraits/men/46.jpg"
        // ],
        images: [
            FebImg1, 
            FebImg2,
            FebImg3,
        ],
        text: "I may have reached a little late, but love never runs on time — it runs on feelings. That trip around Valentine’s will always be one of my favorites. We made up for the days apart with every laugh, every moment spent together. You looked so beautiful, like you always do, but there was something extra special about those days — maybe it was the happiness of finally being together again. Those photos remind me how deeply connected we are, no matter the distance. Every hug, every smile from that time still warms my heart.",
    },
    {
        date: "July 2025",
        // images: [
        //     "/img7.jpg", 
        //     "/img8.jpg", 
        //     "/img9.jpg"
        // ],
        images: [
            JulyImg1,
            JulyImg2,
            JulyImg3,
        ],
        text: "Sometimes you don’t need a reason to meet — you just need to. That’s what this trip was about. I missed you too much to stay away. Seeing you again, spending quiet moments together, laughing like we always do — it made me realize how strong our bond has become. You looked stunning, as always, but it’s your heart and presence that make everything feel right. Those photos are a reminder that no matter how far we live, our love stays close — always growing, always glowing.",
    },
];
const n = bars.length;
console.log(n)

export default function ThirdPage(){
    const buttonStyling = {
        position: "fixed",
        bottom: "5vh",
    }
    return(
        <div className="third-bg ">
            <h1 className="first-heading third-heading">
                {/* SOME HEADING */}
                Our Chapters Across the Miles❤️💙
                </h1>
            <div className="main-bar-container">
                <div className="pseudo-div"></div>
                
                <LayoutGroup>
                    {bars.map((bar, index) => (
                        <>
                            <ExpandingBar key={index} {...bar} />

                            {index < n-1 &&(
                                <motion.div 
                                className="horizontal-bar" 
                                key={index+10}
                                layout 
                                transition={{
                                    layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                                    type: "spring", 
                                    stiffness: 400, 
                                    damping: 40
                                }}
                                ></motion.div>
                            )}
                        </>
                    ))}
                </LayoutGroup>

            </div>
            <NextButton nextDesti={"fourth"} styling={{...buttonStyling}} />
            
            <div className="Notice">
                *Hover On dates
            </div>
        
        </div>
    )
}