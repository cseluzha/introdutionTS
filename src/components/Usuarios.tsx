import React from 'react';
import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';

export const Usuarios = () => {

    useEffect(() => {
        // llamado al API
        reqResApi.get('/users')
            .then(resp => {
                console.log(resp.data.data);
            })
            .catch(console.log);
    }, [])

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                </tr>
            </table>
        </>
    )
}
