import { useRef } from "react";
import "./services.scss";
import { motion, 
  // useInView 
} from "framer-motion";

const variants = {
  initial: {
    x: -250,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  // const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      // animate="animate"
      // ref={ref}
      // animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          This website is only made for<br/> learning purpose
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/herozerotwo.webp" alt="" />

          <h1>
          <b>A Story</b> of
          </h1>

        </div>
        <div className="title">

          <h1>
            <b>Hiro & Zero</b> Two.
          </h1>

          <button>Darling In The Franxx</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black"}}
        >
          <h2>Story</h2>
          <p>
          The story follows a squad of ten pilots, particularly 
          focusing on the partnership between Hiro, a former prodigy, and Zero Two,
          a hybrid human and elite pilot who aspires to become entirely human.
          </p>
          <a href="https://myanimelist.net/anime/35849/Darling_in_the_FranXX" target="_blank" rel="">
          More
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Zero Two</h2>
          <p>
          {/* Zero Two, also called Code:002 and 9'℩ is a fictional character in 
          Darling in the Franxx . She was designed as the most prominent 
          character and icon of the series. */}
          Zero Two(ゼロツー,002) is the main heroine and deuteragonist of 
          Darling in the Franxx. She was an elite Parasite and also known as the "Partner Killer"
          </p>
          <a href="https://myanimelist.net/character/155679/Zero_Two" target="_blank" rel="">
          More
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Hiro</h2>
          <p>
          Hiro(ヒロ,016) was the main protagonist of Darling in the Franxx.
          He was known as a prodigy among the Children.
          He was considered nothing but a failure as a pilot.
          </p>
          <a href="https://myanimelist.net/character/155678/Hiro" target="_blank" rel="">
          More
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ichigo</h2>
          <p>
          Ichigo(イチゴ,015) is one of the main characters in Darling in the Franxx. 
          She was the official leader of Squad 13.
          </p>
          <a href="https://myanimelist.net/character/155680/Ichigo" target="_blank" rel="">
          More
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;