import { useState, useEffect, useRef } from "react"
import {motion, scale} from "framer-motion";
import "./FourthPage.css"
import heart from "../../assets/heart.png"
import v1 from "../../assets/Photos/v1.mp4"
import song from "../../assets/song.mp3"

const ques = [
    // "Lorem ipsum dolor sit amet consectetur adipisicing",
    "Do You Love Me?",
    "Really?? 🥺🥺",
    "Think About It 🥺",
    "Really Really Really ? 🥺",
    "Think again, Last Chance😭",
    "I know you do, Just Click YES 😤"
]

export default function FourthPage(){
    const [yesButtonClick, setYesButtonClick] = useState(false);
    const [quesIndex, setQuesIndex] = useState(0)
    const [clickCount, setClickCount] = useState(5);
    const [showHearts, setShowHearts] = useState(false);
    const audioRef = useRef(null);

    
    const fullText = "Every clip in this video holds a piece of us — our laughter, our little moments, the times we held on to each other and the memories we’ll never forget. From the first time we met to every time we’ve been apart, our bond has only grown stronger. We’ve built something real — a love filled with trust, care, and understanding. No distance, no time, and no challenge can change what we have. You’re not just a part of my life — you are my life, my peace, my forever. This isn’t just a collection of moments; it’s a story of two hearts that chose each other and will keep choosing each other, always. ❤️";
    const text = "I LOVE YOU TOO ❤️"; // your sentence

    const letterVariantsForHeading = {
        hidden: { opacity: 0, scale:1.2 },
        visible: (i) => ({
        opacity: 1,
        scale:1,
        transition: {
            delay: i * 0.2 + 1, // stagger delay between letters
            type: "spring",
            stiffness: 200,
            damping: 20,
        },
        }),
    };
    const letterVariantsForPara = { 
        hidden: { opacity: 0, scale:0.7 }, 
        visible: (i) => ({ 
            opacity: 1, 
            scale:1, 
            transition: { 
                delay: i * 0.1 + 0.5, 
                type: "spring", 
                stiffness: 200, 
                damping: 20, 
            }, 
        }), 
    }


    useEffect(() => {
        if (yesButtonClick) {
        const timer = setTimeout(() => {
            setShowHearts(true);
        }, 1500);

        if (audioRef.current) {
            audioRef.current.volume = 0.3; // 🎧 very soft
            audioRef.current.play().catch((err) =>
            console.log("Autoplay blocked:", err)
            );
        }


        return () => clearTimeout(timer);
        }
    }, [yesButtonClick]);

    return(
        <div className="fourth-bg">
            <audio ref={audioRef} src={song} loop />
            {!yesButtonClick &&(
                <>
                <h3 className="first-heading fourth-heading">
                    {/* Again Long Heading */}
                    Again Happy Birthday to My Forever Love ❤️
                </h3>
                <div className="video-text-container">
                <div className="video-container">
                    <video 
                    src={v1}
                    autoPlay
                    muted
                    loop
                    ></video>
                </div>
                <motion.p
                className="video-text"
                initial="hidden"
                animate="visible"
                >
                {fullText.split(" ").map((letter, i) => (
                    <motion.span
                    key={i}
                    variants={letterVariantsForPara}
                    custom={i}
                    style={{ display: "inline-block" }}
                    >
                    {letter + "\u00A0"}
                    </motion.span>
                ))}
                </motion.p>
                </div>
                <div className="h-line"></div>
                <div className="ques-div">
                    <p>{ques[quesIndex]}</p>
                    <div className="btns">
                        <button 
                        onClick={()=>{setYesButtonClick(true)}}
                        >Yes</button>

                        <button
                        onClick={()=>{
                            if(clickCount>0){
                                setQuesIndex(quesIndex+1);
                            }
                            setClickCount(clickCount-1);
                        }}
                        >No</button>
                    </div>
                </div>
                </>
            )}
            {yesButtonClick && (
                <div className="final-section">
                <motion.h1
                className="final-heading"
                initial="hidden"
                animate="visible"
                >
                {text.split("").map((letter, i) => (
                    <motion.span
                    key={i}
                    variants={letterVariantsForHeading}
                    custom={i}
                    style={{ display: "inline-block" }}
                    >
                    {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
                </motion.h1>

                {showHearts && (
                    <>
                    {[...Array(30)].map((_, i) => (
                        <div
                        key={i}
                        className="floating-item"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            fontSize: `${Math.random() * 1.2 + 1.5}rem`,
                        }}
                        >
                        {Math.random() > 0.45 ? "💖" : "10:39"}
                        </div>
                    ))}

                    <div className="big-heart">
                        <img src={heart} alt="heart" />
                    </div>
                    </>
                )}
                </div>
            )}

            {!yesButtonClick &&(
                <div className="Notice">Explore the page, then answer the questions below</div>
            )}
        </div>
    )
}