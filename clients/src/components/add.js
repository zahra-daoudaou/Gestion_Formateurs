import React from "react";

function Add() {
    const styles = `
        h1 {
            margin-bottom: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            max-width: 300px;
        }

        label {
            margin-bottom: 10px;
        }

        input {
            margin-bottom: 10px;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    `;

    return (
        <div className="container">
            <style>{styles}</style>
            <h1>Add a Teacher</h1>
            <form>
                <label>Matricule</label>
                <input type="text" name="matricule" id="matricule"></input>
                <label>Prenom</label>
                <input type="text" name="prenom" id="prenom"></input>
                <label>Nom</label>
                <input type="text" name="nom" id="nom"></input>
                <label>Telephone</label>
                <input type="text" name="telephone" id="telephone"></input>
                <label>Email</label>
                <input type="text" name="email" id="email"></input>
                <label>Echelle</label>
                <input type="text" name="echelle" id="echelle"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add;
