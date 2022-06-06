import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <h1 className="heading">About Me</h1>
        <div className="content">
          <h3>
            I Am a <span>shaik mohammed</span>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </p>
        </div>
        <div className="skills">
          <div className="proccess">
            <h3>
              Html<span>95%</span>
            </h3>
            <div className="bars">
              <span></span>
            </div>
          </div>
          <div className="proccess">
            <h3>
              css <span>75%</span>
            </h3>
            <div className="bars">
              <span></span>
            </div>
          </div>
          <div className="proccess">
            <h3>
              javascript<span>65%</span>
            </h3>
            <div className="bars">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
