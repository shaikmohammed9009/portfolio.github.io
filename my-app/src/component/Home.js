import React from "react";
import { Link } from "react-router-dom";
// import { Typewriter } from 'react-simple-typewriter'
import { useTypewriter} from 'react-simple-typewriter'

export const Home = () => {

  // var type = new Typed(".typing-text", {
  //   strings: ["web disigner", "frontend developer"],
  //   typeSpeed: 120,
  //   loop: true,
  // });

  const {text} = useTypewriter({
    words: ['FrontEnd Developer', 'UI Developer'],
    loop:{}, // Infinit
    delaySpeed:500,
    deleteSpeed:50
  })


  return (
    <>
      <section className="section">
        <div className="Home">
          <h3>hi there....</h3>
          <h3 className="home_name">
            my name <span>shaik mohammed</span>
          </h3>
          <h3 className="home_post">
            i am a <span className="typing-text">{text}</span>
          </h3>

          <Link to="/">
            <button className="btn">Hire me</button>
          </Link>

          <div className="share">
            <Link className="fab fa-facebook-f" to="/"></Link>
            <Link className="fab fa-twitter" to="/"></Link>
            <Link className="fab fa-instagram" to="/"></Link>
            <Link className="fab fa-linkedin " to="/"></Link>
          </div>
        </div>
      </section>
    </>
  );
};
