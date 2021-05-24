import React, { useState, useEffect } from 'react';
import "./styles.css";

function UploadButton(props) {

    useEffect(() => {
    });

    return (
        <div>
            <div className="upload-btn-wrapper">
                <button className="btn">Upload a file</button>
                <input type="file" name="myfile" />
            </div>
            <p>File number limit: 5 Single file size limit 10MB. Allowed file types: Word, Excel, PPT, PDF, Image, Video, Audio</p>
        </div>
    );
}

export default UploadButton;