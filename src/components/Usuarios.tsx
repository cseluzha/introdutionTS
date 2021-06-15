import React, { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ResResListado, Usuario } from '../interface/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    useEffect(() => {
        // llamado al API
        CargarUsuarios();
    }, [])

    const paginaRef = useRef(1);

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={usuario.avatar}
                        alt={usuario.first_name}
                        style={{
                            width: 40,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{usuario.first_name}</td>
                <td>{usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    const CargarUsuarios = async () => {
        const response = await reqResApi.get<ResResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        // For the moment not use the error handling 
        // .then(resp => {
        //     setUsuarios(resp.data.data)
        // })
        // .catch(console.log);
        if (response.data.data.length > 0) {
            setUsuarios(response.data.data)
            paginaRef.current++;
        } else {
            alert('No hay mas registros');
        }
    }

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
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button
                className="btn  btn-primary"
            >
                Anterior
            </button>
            &nbsp;
            <button
                className="btn  btn-primary"
                onClick={CargarUsuarios}
            >
                Siguiente
            </button>
        </>
    )
}
