"use client";
// Core
import React, { useState, useEffect } from "react";

import "../styles/Footer.css";
import { INSTAGRAM_URL, INSTAGRAM_USUARIO } from "../data/redes";


const Footer = () => {


    return(
        <footer>
            <div className="content">
                <div className="rightsText">
                    Todos los derechos reservados &#169; B-ECO {new Date().getFullYear()} ​
                </div>
                <div className="informationText">
                    Av. Gral Ramón Corona No 2514, 45201 Zapopan, Jal.
                </div>
                <a className="informationText footer-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                    Instagram: {INSTAGRAM_USUARIO}
                </a>
            </div>
        </footer>
    );
}

export default Footer;