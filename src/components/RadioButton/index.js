import React, { useState, useEffect } from 'react';
import "./styles.css";

function RadioButton(props) {

    useEffect(() => {
    });

    return (
        <label className="container">{props.title}
            <input type="radio" checked="checked" name="radio" />
            <span className="checkmark"></span>
        </label>
    );
}

export default RadioButton;