// import "./parallax.scss"
// import { useRef } from "react"
// import {motion,useScroll,useTransform} from "framer-motion"

// const Parallax = ({type}) => {

//   const ref = useRef()

//   const {scrollYProgress} = useScroll({
//     target:ref,
//     offset:["start start","end start"]
//   });

//   // const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"])
//   const yText=useTransform(scrollYProgress,[0,1],["0%","400%"])



//   return (
//     <div 
//         className="parallax" 
//         style={{
//             background:
//                 type === "services"
//                     ? "linear-gradient(180deg, #321111, #1d0c0c)"
//                     : "linear-gradient(180deg, #321111, #505064)",
//         }}
//     >
//         <motion.h1 style={{y:yText}}>{type==="services" ? "What We Do?" : "What We Did?"}</motion.h1>
//         <motion.div className="mountains"></motion.div>
//         <motion.div style={{y:yBg}} className="planets"></motion.div>
//         <motion.div style={{x:yBg}} className="stars"></motion.div>
//     </div>
//   )
// }

// export default Parallax

import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #321111, #1d0c0c)"
            : "linear-gradient(180deg, #321111, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Zero Two" : "Hiro"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets-fotor.png" : "/sun-fotor.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;















                    // ? "linear-gradient(180deg, #321111, #1d0c0c)"
                    // : "linear-gradient(180deg, #321111, #505064)",