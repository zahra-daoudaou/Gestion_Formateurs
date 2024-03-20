import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Formateurs() {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/formateurs')
            .then(response => response.json())
            .then(data => {
                setBackendData(data);
            });
    }, []);

    return (
        <div className="App">
            <div>
                {backendData.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <div>
                            <h1>Les Formateurs</h1>
                            <div>
                                <Link to='/Add' className="button-style">Add</Link>
                            </div>
                        </div>
                        <table border={1} rules='all' width='80%'>
                            <thead>
                                <tr>
                                    <th>Formateur</th>
                                    <th>Matricule</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {backendData.map((formateur, i) => (
                                    <tr key={i}>
                                        <td>{formateur.nom} {formateur.prenom}</td>
                                        <td>{formateur.matricule}</td>
                                        <td>
                                            <Link to={`/more-data/${formateur.id}`} className="button-style">Details</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Formateurs;
