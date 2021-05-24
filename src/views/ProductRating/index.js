import React, { useState, useEffect } from 'react';
import { Header, Asterik, RatingInput, Button, Footer } from "../../components/index";
import "../../styles/commonstyles.css";

function ProductRating(props) {

    useEffect(() => {
    });

    return (
        <div className="main">
            <div className="paper">
                <Header title={'Product Rating'} />
                <p>Hi Nevetha when you submit this form, the owner will be able to see you name and email address.</p>
                <div className="content">
                    <h3><Asterik /> Required</h3>
                    <div className="inputArea">
                        <h2>1. How likely are you to recommend this tool to a friend or co-worker?</h2>
                        <RatingInput/>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );

}

export default ProductRating;