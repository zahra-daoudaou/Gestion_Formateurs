import React from "react";

function Add() {
    return (
        <div>
            <h1>Add Formateur</h1>
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
            </form>
        </div>
    )
}

export default Add;