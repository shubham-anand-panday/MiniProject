// TestimonialCard.jsx
import { motion } from "framer-motion";

export default function CarouselDisplay({ desc, imgUrl }) {
  return (
    <motion.div
      className="spotlight-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="image-wrap">
        <img src={imgUrl} className="image" />
      </div>
      <p className="desc-text">“{desc}”</p>

    </motion.div>
  );
}
