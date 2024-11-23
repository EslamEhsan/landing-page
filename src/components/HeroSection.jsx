import React from "react";
// import { useSpring, animated } from "@react-spring/web";
// import { useTranslation } from "react-i18next";


function HeroSection() {
    // const { trans } = useTranslation()
    // const fadeInProps = useSpring({
    //     opacity: 1,
    //     transform: "translateY(0px)",
    //     delay: 200
    // })
    return (
        <div className="hero" >
            <h1>Empower yor future with coding</h1>

            <p>Learn Programming skills that matter for the future.</p>
            <button className="cta-button">Get Started</button>
        </div>
    )
}

export default HeroSection