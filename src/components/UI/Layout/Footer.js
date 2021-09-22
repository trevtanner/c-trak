import React from "react"
import classes from './Footer.module.css'

const Footer = () => {
    return(
        <section className={classes.footer}>
<footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center">
        <div className="row">
            <div>
                <p>Created by Trevor Tanner</p>
                <p>&copy; TT Web Development and Design </p>
            </div>
        </div>
    </div>
</footer>
</section>
    )
};

export default Footer;