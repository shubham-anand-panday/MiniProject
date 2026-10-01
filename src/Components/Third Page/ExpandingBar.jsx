import React, { useState, useRef } from "react";
import { motion, AnimatePresence  } from "framer-motion";

const transition = { 
    layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    type: "spring", 
    stiffness: 400, 
    damping: 40 
};

export default function ExpandingBar({ date, images, text }) {
    const [hovered, setHovered] = useState(false);
    const delayTimer = useRef(null);


    const handleMouseEnter = () => {
        delayTimer.current = setTimeout(() => {
        setHovered(true);
        }, 100);
    };

    const handleMouseLeave = () => {
        clearTimeout(delayTimer.current);
        setHovered(false);
    };

    return (
        <motion.div
        className="bar-container"
        layout
        transition={transition}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{ height: hovered ? 332 : 70 }} //"fit-content"
        >
            {!hovered && (
                <motion.div 
                className="bar-header" 
                layout 
                transition={transition}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                >
                    <span>{date}</span>
                </motion.div>
            )}

            {hovered && (
                <motion.div
                className="bar-content"
                layout
                transition={transition}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                >
                <div className="images">
                    {images.map((src, i) => {
                        const transformProps = [
                            { y: 40, rotate: 10 },
                            { y: -10, rotate: -5 },
                            { y: 40, x: -20, rotate: 6 }
                        ];

                        const t = transformProps[i] || {};

                        return(
                            <motion.img
                                key={i}
                                src={src}
                                alt=""
                                initial={{ opacity: 0,scale:0, ...t}}
                                animate={{ opacity: 1, scale:1, ...t}}
                                transition={{ delay: 0.2 + i * 0.3 }} // 👈 slight stagger
                            />
                        )
                    })}
                </div>
                <div className="text">{text}</div>
                </motion.div>
            )}
        </motion.div>
    );
}