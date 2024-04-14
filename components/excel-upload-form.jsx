"use client"
import React, { useState } from 'react';

export const ExcelUploadForm = () => {

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload the food you wish to donate:
                <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
