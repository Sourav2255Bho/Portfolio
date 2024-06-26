import React, { useRef } from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({type}) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["start start", "end start"]
    });

    const yText=useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
    const yBg=useTransform(scrollYProgress, [0,1], ["0%", "100%"]);


  return (
    // <div className="parallax" ref={ref} style={{background: type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"}}>
    //     <motion.h1 style={{ y : yText }}>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
    //     <motion.div className="mountains"></motion.div>
    //     <motion.div className="planets" style={{ y : yBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`}}></motion.div>
    //     <motion.div style={{ x : yBg, y:yBg}} className="stars"></motion.div>
    // </div>

    <div className="parallax" ref={ref} >
      <motion.div className="container" style={{ y : yText }}>
      <motion.h1 ><b>About</b> Me</motion.h1>
      <motion.div className="text">I'm a highly motivated full-stack developer with a burning desire to explore the ever-evolving world of IT. My recent journey through CDAC has equipped me with a strong foundation of knowledge and practical skills that are essential for building robust and user-friendly applications.  I'm eager to leverage this newfound expertise and delve deeper into the exciting possibilities that this field holds!</motion.div>
      </motion.div>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{ y : yBg }}></motion.div>
        <motion.div style={{ x : yBg, y:yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax