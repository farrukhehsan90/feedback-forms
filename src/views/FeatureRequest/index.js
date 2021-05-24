import React, { useState, useEffect } from 'react';
import { Header, Asterik, TextArea, UploadButton, Button, Footer } from "../../components/index";
import "../../styles/commonstyles.css";

function FeatureRequest(props) {

    useEffect(() => {
    });

    return (
        <div className="main">
            <div className="paper">
                <Header title={'Feature Request'} />
                <p>Hi Nevetha when you submit this form, the owner will be able to see you name and email address.</p>
                <div className="content">
                    <h3><Asterik /> Required</h3>
                    <div className="inputArea">
                        <h2>1. Please let us know what new feature you like to see in the Data Quality and Anomaly Reports.</h2>
                        <TextArea />
                    </div>
                    <div className="inputArea">
                        <h2>4. Attach Detail <span>(Non-anonymous question)</span></h2>
                        <UploadButton />
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

export default FeatureRequest;