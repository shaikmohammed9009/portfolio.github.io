import React from "react";

const contact = () => {
  return (
    <section className="contact">
      <h1 className="heading">Contact Me</h1>

      <div className="row">
        <form>
          <input type="Name" className="box" placeholder="First Name" />
          <input type="Name" className="box" placeholder="Last Name" />
          <input type="Name" className="box" placeholder="Email" />
          <input type="Name" className="box" placeholder="Your Project" />
          <textarea className="box message" name="" cols={40} rows={10}></textarea>
          <input type="submit" className="btn" value="message"/>
        </form>
        <div className="contect">
            <div className="icons">
                <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
                <p>Kurnool Andhra Pradesh 518001</p>
            </div>
            <div className="icons">
                <h3><i className="fas fa-envelope"></i> Email</h3>
                <p>Shaik@gmail.com</p>
            </div>
            <div className="icons">
                <h3><i className="fas fa-phone"></i> Address</h3>
                <p>Kurnool Andhra Pradesh 518001</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
