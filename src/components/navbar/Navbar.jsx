import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        { /* Sidebar */ }
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}>Dev Ankit Mishra</motion.span>
            <div className="social">
                <a href="https://x.com/DARLI_FRA?t=TSS3FpGHzQPfBMdFdnoQ9A&s=09"><img src="/twitter.svg" alt="" /></a>
                <a href="https://darli-fra.jp/"><img src="/logo.png" alt="" /></a>
                <a href="https://youtu.be/isiV3tYW3IM?si=RciHJGxbbibe7HZq"><img src="/youtube.png" alt="" /></a>
                
            </div>
        </div>
    </div>
  )
}



export default Navbar
