import React from "react";
import classes from "./Heading.module.css";
import Button from "../Button.js";
import { Container, Navbar } from "react-bootstrap";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { HeaderSubheader } from "semantic-ui-react";

const Heading = (props) => {
  return (
    // <header className={classes.title}>
    //   <Navbar>
    //     <Container>
    //       <FadeIn>
    //       <Link to="/" className={classes.link}>
    //       <h1>C-Trak</h1>
    //       </Link>
    //       </FadeIn>
    //       <Navbar.Toggle />
    //       <Navbar.Collapse className="justify-content-end">
    //         <Navbar.Text>
    //         <FadeIn>
    //           {/* <Button>Login</Button> */}
    //           <Link to="/" className={classes.link}>
    //             <p>Tracker</p>
    //           </Link>
    //           <Link to="/prices" className={classes.link}>
    //             <p>Prices</p>
    //           </Link>
    //           <Link to="/resources" className={classes.link}>
    //             <p>Resources</p>
    //           </Link>
    //           </FadeIn>
    //         </Navbar.Text>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </header>
    <header className={classes.title}>
        <div class="ui inverted secondary pointing menu">
          <div className="header item">
            <h1>{process.env.REACT_APP_TITLE}</h1>
          </div>
          <Link to="/" className="item">
            Tracker
          </Link>
          <Link to="/prices" className="item">
            Prices
          </Link>
          <Link to="/resources" className="item">
            Resources
          </Link>
        </div>

    </header>
  );
};

export default Heading;

//styling
//get login button working to bring up modal with login form
