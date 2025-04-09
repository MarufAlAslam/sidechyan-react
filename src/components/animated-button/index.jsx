import React from "react";
import "./AnimatedButton.css"; // Don't forget to create this CSS file
import { Link } from "react-router-dom";

const AnimatedButton = ({text = "Upload Your Music"}) => {
    return (
        <Link href="#" className="animated-button">
            <div className="gradient-wrapper">
                <div className="shapes-wrapper">
                    <div className="shape purple rotate"></div>
                    <div className="shape blue spin-reverse"></div>
                    <div className="shape orange float"></div>
                </div>
                <div className="noise"></div>
            </div>
            <div className="text-wrapper">
                <span className="button-text">👉 {text}</span>
            </div>
        </Link>
    );
};

export default AnimatedButton;
