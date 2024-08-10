import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useState } from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, description, image }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleOutsideClick = (e) => {
    if (isFullscreen && e.target.tagName !== "IMG") {
      setIsFullscreen(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-5 rounded-3xl xl:w-[320px] w-full"
      onClick={handleOutsideClick}
    >
      <div>
        <p className="text-[20px] text-secondary font-semibold text-center pb-5">
          {description}
        </p>
        <img
          src={image}
          alt={description}
          className={`w-full min-h-[250px] h-[400px] rounded-3xl object-cover cursor-zoom-in ${
            isFullscreen
              ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] z-50"
              : ""
          }`}
          onClick={handleClick}
        />
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-10 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Moments of Growth</p>
          <h2 className={styles.sectionHeadText}>Work & Uni Snapshots</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-6 pb-14 flex flex-wrap gap-5`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.description}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
