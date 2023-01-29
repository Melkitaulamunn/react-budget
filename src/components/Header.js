import React from "react";
import "../assets/styles/header.css";
import logo from "../assets/imgs/logo.gif";
import leftArrow from "../assets/imgs/leftArrow.png";
import { useNavigate } from "react-router-dom";

function Header({ whichPage, navigateTo }) {
    console.log(whichPage);
    const navigate = useNavigate();
    var show = false;
    if (whichPage !== "home") {
        show = true;
    }
    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                {show === true && (
                    <div onClick={() => navigate(navigateTo)} className="headerIconWrapper">
                        <img src={leftArrow} />
                    </div>
                )}
                <div className="logoWrapper">
                    <img src={logo} />
                </div>
                <h1>My Budget App</h1>
            </div>
        </div>
    );
}

export default Header;