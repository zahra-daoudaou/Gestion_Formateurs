import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const containerStyle = {
        textAlign: 'center',
        marginTop: '50px',
    };

    const imageStyle = {
        maxWidth: '80%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '20px',
    };

    const paragraphStyle = {
        fontSize: '18px',
        lineHeight: '1.5',
        marginBottom: '20px',
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    return (
        <div style={containerStyle}>
            <h1>Welcome to Our Website!</h1>
            <img src='shutterstock_1127429759_master.jpg' alt="Teachers" style={imageStyle} />
            <p style={paragraphStyle}>
            Welcome to our platform for managing teacher data. 
            We provide schools and institutions with an easy-to-use 
            interface to organize teacher information  
            and assignments. Our mission is to streamline 
            teacher data management, ensuring schools have 
            the tools they need to make informed decisions. 
            Explore our website to learn more!
            </p>
            <div style={buttonContainerStyle}>
                <Link to={`/Search`} style={buttonStyle}>Search</Link>
                <Link to={`/Formateurs`} style={buttonStyle}>Browse</Link>
                <Link to={`/Add`} style={buttonStyle}>Add</Link>
            </div>
        </div>
    )
}

export default Home;
