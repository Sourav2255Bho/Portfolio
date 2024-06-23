import Sidebar from "../sidebar/SideBar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>My Portfolio</motion.span>
            <div className="social">
                <a href="#"><img src="/github-mark-white.png" alt=""></img></a>
                <a href="#"><img src="/LI-In-Bug.png" alt=""></img></a>
                <a href="#"><img src="/leetcode2.png" alt=""></img></a>
                <a href="#"><img src="/facebook.png" alt=""></img></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar