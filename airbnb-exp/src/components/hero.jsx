import React from "react";
import image from '../assets/hero.png'

 function Hero(){
    return(
        <section className="hero-section">
            <img src={image} alt="" className="hero-img" />
            <h1 className="hero-heading">
            Online Experiences
            </h1>
            <p className="hero-text">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export {Hero}