import React, { useState, useEffect } from 'react';
import "./styles.css";

function TextArea(props) {

    useEffect(() => {
    });

    return (
        <textarea className="textArea" rows="3" placeholder="Enter your answer" />
    );
}

export default TextArea;