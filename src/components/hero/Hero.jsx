import "./hero.scss"
import { motion } from "framer-motion";
import pdf from "../../data/pdf.json"

const textVariants = {
    initial : {
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollAnimation: {
        opacity: 0,
        y: 50,
        transition: {
            delay : 2, // After the animation done with the parent element it should delay for 2 secs
            duration: 2,
            repeat: Infinity, // To do this animation repeatedly
        }
    },
};

const sliderTextVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const heroImgVariants = {
    initial:{
        x: 1000,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration:1,
        }
    },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>SOURAV BHOWMICK</motion.h2>
                <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.a href={`${pdf.pdfSrc}`} target="blank"><motion.button variants={textVariants} whileHover={{color:"#f39c12"}} whileTap={{color:"#ffbb33"}} >Show Resume</motion.button></motion.a>
                    <a href="#Contact"><motion.button variants={textVariants} whileHover={{color:"#f39c12"}} whileTap={{color:"#ffbb33"}}>Contact Me</motion.button></a>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollAnimation" src="/scroll.png" alt="" />
            </motion.div>
        </div>

        <motion.div className="slidingTextContainer" variants={sliderTextVariants} initial="initial" animate="animate">
            Passionate FullStack Developer
        </motion.div>

        <motion.div className="imageContainer" variants={heroImgVariants} initial="initial" animate="animate">
            <img id="heroimg" src="/—Pngtree—children s software programming_5401259.png" alt="" />
        </motion.div>
    </div>
  )
}

export default Hero