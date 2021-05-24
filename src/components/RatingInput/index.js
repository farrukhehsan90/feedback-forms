import React, { useState, useEffect } from 'react';
import "./styles.css";

function RatingInput(props) {

    useEffect(() => {
    });

    return (
        <div>
            <ul>
                <label><input type="radio" name="select" /><span>0</span></label>
                <label><input type="radio" name="select" /><span>1</span></label>
                <label><input type="radio" name="select" /><span>2</span></label>
                <label><input type="radio" name="select" /><span>3</span></label>
                <label><input type="radio" name="select" /><span>4</span></label>
                <label><input type="radio" name="select" /><span>5</span></label>
                <label><input type="radio" name="select" /><span>6</span></label>
                <label><input type="radio" name="select" /><span>7</span></label>
                <label><input type="radio" name="select" /><span>8</span></label>
                <label><input type="radio" name="select" /><span>9</span></label>
                <label><input type="radio" name="select" /><span>10</span></label>
            </ul>
            <div className="bottomTxtContainer">
                <p>Not at all likely</p>
                <p>Extremely likely</p>
            </div>
        </div>
    );
}

export default RatingInput;