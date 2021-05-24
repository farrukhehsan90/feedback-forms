import React from 'react';
import "./styles.css";
import { Images } from "../../config/index";

function Header(props) {
    return (
        <div className="header">
            <img src={Images.logo} width="auto" height="auto" />
            <h1>{props.title}</h1>
        </div>
    );
}

export default Header;