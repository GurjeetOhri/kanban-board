import React from "react";
import "./Footer.css";
function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer>
            <p>Copyright © {year}</p>
            <p>Made with ❤️ by Gurjeet Ohri</p>
        </footer>
    )
}

export default Footer;