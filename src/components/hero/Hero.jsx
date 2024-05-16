import { Link } from "react-router-dom";
import "./hero.scss"
import { motion } from "framer-motion";


const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:1.5,
      repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x: "-1250%",
    transition:{
      repeat:Infinity,
      repeatType:'mirror',
      duration:30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>Zero Two[002]</motion.h2>
        <motion.h1 variants={textVariants}>Darling In The Franxx</motion.h1>
        <motion.div variants={textVariants}className="buttons">
        <a href={"#About"} variants={textVariants}><motion.button >Check Mangas & Anime</motion.button></a>
        
        <a href={"https://www.imdb.com/title/tt7865090/"} variants={textVariants}><motion.button>IMDB Ratings</motion.button></a>

          {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
      I MADE THIS WEB PAGE JUST TO FLEX MY FRONTEND SKILLS
      </motion.div>  
        
        <div className="imageContainer">
            <img src="/zerotwo700.png" alt="" />
        </div>
    </div>
  )
}

export default Hero