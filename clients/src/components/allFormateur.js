import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Formateurs() {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/formateurs')
            .then(response => response.json())
            .then(data => {
                setBackendData(data);
            });
    }, []);

    const styles = `
        .App {
            margin: 20px;

        }

        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }


        .button-style {
            display: inline-block;
            padding: 8px 12px;
            text-decoration: none;
            background-color: #007bff;
            color: white;
            border-radius: 4px;
        }

        .button-style:hover {
            background-color: #0056b3;
        }

        #red {
            display: inline-block;
            padding: 8px 12px;
            text-decoration: none;
            background-color: #ff0000;
            color: white;
            border-radius: 4px;
        }
        
        #red:hover {
            background-color: #b30000;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
        }

        #loding {
            color: #ff0000;
            font-size: 30px;
        }
    `;

    return (
        <div className="App">
            <style>{styles}</style>
            <div >
                {backendData.length === 0 ? (
                    <div className="container">
                        <p id="loding" >Loading...</p>
                    </div>
                ) : (
                    <div>
                        <div className="container">
                            <h1>Teachers</h1>
                            <div>
                                <Link to='/Add' className="button-style">Add</Link>
                            </div>
                        </div>
                        <br />
                        <table border={1} rules='all' width='80%'>
                            <thead>
                                <tr>
                                    <th>Teacher</th>
                                    <th>Matricule</th>
                                    <th>Details</th>
                                    <th>Delete</th>
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
                                        <td>
                                            <Link id='red' to={`/delete-data/${formateur.id}`} className="button-style">Delete</Link>
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
