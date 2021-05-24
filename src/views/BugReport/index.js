import React, { useState, useEffect } from 'react';
import { Header, Asterik, TextArea, RadioButton, UploadButton, Button, Footer } from "../../components/index";
import "../../styles/commonstyles.css";

function BugReport(props) {

    useEffect(() => {
    });

    return (
        <div className="main">
            <div className="paper">
                <Header title={'Bug Report'} />
                <p>Hi Nevetha when you submit this form, the owner will be able to see you name and email address.</p>
                <div className="content">
                    <h3><Asterik /> Required</h3>
                    <div className="inputArea">
                        <h2>1. Issue Summary <Asterik /></h2>
                        <TextArea />
                    </div>
                    <div className="inputArea">
                        <h2>2. Issue Detail <Asterik /></h2>
                        <TextArea />
                    </div>
                    <div className="inputArea">
                        <h2>3. Priority <Asterik /></h2>
                        <RadioButton title={'High'} />
                        <RadioButton title={'Medium'} />
                        <RadioButton title={'Low'} />
                    </div>
                    <div className="inputArea">
                        <h2>4. Attach Screenshot <span>(Non-anonymous question)</span></h2>
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

export default BugReport;