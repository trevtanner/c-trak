import React from "react";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={classes.footer}>
      <footer className="page-footer font-small pt-4">
        <div className="container-fluid text-center">
          <div className="row">
            <div>
              <p>Created by Trevor Tanner</p>
              <p>
                <a href="https://www.twitter.com/trevtanner">
                  <FaTwitterSquare size='3em'/>
                </a>

                <a href="https://github.com/trevtanner">
                  <FaGithubSquare size='3em'/>
                </a>

                <a href="https://www.linkedin.com/in/trevorstanner/">
                  <FaLinkedin size='3em'/>
                </a>
              </p>
              <p>&copy; {currentYear} TT Web Development and Design </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
