import React from "react";
import "./banner.scss";
import { FcPhoneAndroid, FcComments } from "react-icons/fc";
import { FaLocationArrow } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Banner = () => {
  //name and contacts
  return (
    <div className="banner__container">
      <div className="name__banner">
        <div className="left">
          <main className="big__title">NIKKIL KUMAR PC</main>
          <main className="sml__title">
            Versatile MERN Stack Developer | Passionate about Web Tech & Design
            Enthusiast
          </main>
        </div>
      </div>
      <div className="contact__banner">
        <span className="mobile">
          <FcPhoneAndroid size={29} />
          <span>+91-7010471061</span>
        </span>
        <span className="email">
          <FcComments size={29} />
          <span>nikkilkumar26@gmail.com</span>
        </span>
        <span className="place">
          <FaLocationArrow size={29} />
          <span>Chennai</span>
        </span>
        <span className="linkedIn">
          <BsLinkedin size={29} color="#0A66C2" />
          <a
            href="https://www.linkedin.com/in/nikkil-kumar-pc-b1bb62125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </span>
      </div>
    </div>
  );
};

export default Banner;
