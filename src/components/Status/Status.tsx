import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../../images";
import "./Status.scss";


function Status() {

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(
      (carouselRef.current?.scrollWidth || 0) -
        (carouselRef.current?.offsetWidth || 0)
    );
  }, []);
  return (
    <div className="statuses">
    <motion.div
      ref={carouselRef}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((img, i) => (
          <motion.div className="item" key={i}>
            <img src={img} alt="carousel-img" />
            <div className="image">
              <img src={img} alt="carousel-img" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
  );
}

export default Status;
