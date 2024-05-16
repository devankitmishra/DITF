import {motion, spring} from "framer-motion"
import { useState } from "react"




const Test = () => {

const [open, setOpen] = useState(false)


const variants = {
    // visible : {opacity:1, x:100, 
    //   transition:  {staggerChildren:0.25} 
    //   // {duration:2} {type:"spring",stiffnes:100,damping:100},
    // },
    
    visible:(i)=>({
      opacity:1,
      x:100,
      transition:{delay:i*0.3},

    }),
    hidden : {opacity:0}
    
};

const items = ["HTML","CSS","JavaScript","React"];
  return (
    <div className="course">
      {/* <motion.div 
        className="box"
        // animate={{opacity:0}}
        // transition={{duration:2}}
        // initial={{opacity:0, scale:0.5}}
        // animate={{opacity:1, scale:1}}
        // initial={{opacity:0.5, scale:0.5}}
        // whileHover={{opacity:2,scale:2}}
        // whileTap={{opacity:1,scale:2}}
        // whileInView={{opacity:1,scale:2}}
        // drag
        // transition={{duration:2}}
        variants={variants}
        animate={open ? "visible":"hidden"}
        ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}

        <motion.ul initial="hidden" animate="visible" variants={variants}>
          {items.map((item,i)=>(
            <motion.li variants={variants} key={item} custom={i}>
            {item}
            </motion.li>
          ))}
          
        </motion.ul>
    </div>
  );
};

export default Test;