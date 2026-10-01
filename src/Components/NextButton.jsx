import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from "@fortawesome/free-solid-svg-icons"
import { Link  } from "react-router-dom";
import { motion } from "framer-motion"
import "./NextButton.css"

export default function NextButton({nextDesti, styling}){
    return(
        <div className='button-outer-container' style={{...styling}}>

        <Link className='Abutton' to= {`/${nextDesti}`}>
            <motion.button 
            className="next-button"
            initial={{opacity:0, y:30, }}
            animate={{opacity:1, y:0, }}
            transition={{duration:0.5, ease:"easeInOut", delay: 3.5}}
            >
                <span className="btn-text">
                    Next
                    <FontAwesomeIcon icon={faForward} className="ml-2"/>
                </span>
                <div className="heart-container">
                    <span className="heart top-left">💖</span>
                    <span className="heart bottom-left">💖</span>
                    <span className="heart top-right">💖</span>
                    <span className="heart bottom-right">💖</span>
                </div>
            </motion.button>
        </Link>
        </div>
    )
}