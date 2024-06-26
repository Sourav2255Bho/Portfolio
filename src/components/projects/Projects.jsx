import React, { useRef } from 'react'
import "./projects.scss"
import imgSrc from "../../data/logo.json"
import { motion, useInView } from 'framer-motion'

const titleVariants = {
    initial :{
        scale:0,
        opacity:0,
    },
    animate :{
        scale:1,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
};

const boxVariants = {
    initial :{
        y:100,
        opacity:0,
    },
    animate :{
        y:0,
        opacity:1,
        transition:{
            delay:1,
            duration:1,
            staggerChildren: 0.1,
        },
    },
};


const Projects = () => {
    // const ref = useRef()

    // const isInView = useInView(ref,{margin:"-200px"},Infinity)

  return (
    <motion.div className="projects">
      <motion.div className="titleContainer" variants={titleVariants} initial="initial" whileInView="animate">
        <div className="title">
            <img src={`${imgSrc.projectImgSrc}`} alt="image" />
            <h1><motion.b whileHover={{color:"orange"}}>Projects</motion.b></h1>
        </div>
        <div className="title">
            <h1>I Have <motion.b whileHover={{color:"orange"}}>Worked</motion.b> On.</h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={boxVariants} initial="initial" whileInView="animate">
        <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
            <h2>Project 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. asjna apsmdac paosoamc aiscjaa asnccamsc asjnca aacammacmao oakscasnca</p>
            <button>Link</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
            <h2>Project 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. anscjasc aokskmcmas pascsamoskc oajcamsca pasmcoams jsndcdsjn asncaasca</p>
            <button>Link</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
            <h2>Project 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. anscjasc aokskmcmas pascsamoskc oajcamsca pasmcoams jsndcdsjn asncaasca</p>
            <button>Link</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Projects