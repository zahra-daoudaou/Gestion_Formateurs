import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MoreData() {
    const [backendData, setBackendData] = useState([]);
    const { formateurId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/formateur_id/${formateurId}`)
            .then(response => response.json())
            .then(data => {
                setBackendData(data);
            });
    }, [formateurId]);

    return (
        <div className="App">
            <div>
                {backendData.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <div>
                            <h1>Formateur</h1>
                            <div>
                                <button>Delete</button>
                            </div>
                        </div>
                        <table border={1} rules='all' width='80%'>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Matricule</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>Echelle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {backendData.map((formateur, i) => (
                                    <tr key={i}>
                                        <td>{formateur.nom} </td>
                                        <td>{formateur.prenom}</td>
                                        <td>{formateur.matricule}</td>
                                        <td>{formateur.telephone} </td>
                                        <td>{formateur.email}</td>
                                        <td>{formateur.echelle}</td>
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

export default MoreData;
