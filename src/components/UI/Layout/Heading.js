import React from "react";
import classes from "./Heading.module.css";
import Button from "../Button.js";
import { Container, Navbar } from "react-bootstrap";
import FadeIn from 'react-fade-in';

const Heading = (props) => {
  return (
    <header className={classes.title}>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
          <FadeIn>
          <h1>C-Trak</h1>
          </FadeIn>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <FadeIn>
              <Button>Login</Button>
              </FadeIn>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Heading;

//styling
//get login button working to bring up modal with login form
