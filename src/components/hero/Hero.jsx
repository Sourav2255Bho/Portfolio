import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textContainer">
                <h2>SOURAV BHOWMICK</h2>
                <h1>Full Stack Developer</h1>
                <div className="buttons">
                    <button>See the Latest Works</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
        </div>

        <div className="slidingTextContainer">
            Passionate FullStack Developer
        </div>

        <div className="imageContainer">
            <img id="heroimg" src="/—Pngtree—children s software programming_5401259.png" alt="" />
        </div>
    </div>
  )
}

export default Hero