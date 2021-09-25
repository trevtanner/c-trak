import React from 'react';
import classes from './Heading.module.css'
import Button from '../Button.js'

const Heading = (props) => {
    return (
    <header className={classes.title}>
    <h1>C-Trak</h1>
    <section className={classes.login}>
    <Button>Login</Button>
    </section>
    </header>
    )
};

export default Heading;

//styling
//get login button working to bring up modal with login form