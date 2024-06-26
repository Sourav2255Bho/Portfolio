import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
import logo from "../../data/logo.json"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>My Portfolio</motion.span>
            <motion.div className="social" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:5}}>
                <a href="https://github.com/Sourav2255Bho" target="blank"><img src={`${logo.githubImgSrc}`} alt=""></img></a>
                <a href="https://www.linkedin.com/in/sourav-bhowmick-436851192/" target="blank"><img src={`${logo.linkdinImgSrc}`} alt=""></img></a>
                <a href="https://leetcode.com/u/bhowmicks2255/" target="blank"><img src={`${logo.leetcodeImgSrc}`} alt=""></img></a>
                <a href="mailto:bhowmicks2255@gmail.com" target="blank"><img src={`${logo.gmailImgSrc}`} alt=""></img></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar