import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { Usuario, ResResListado } from '../interface/reqRes';

const useUsers = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    useEffect(() => {
        // llamado al API
        CargarUsuarios();
    }, [])
    const paginaRef = useRef(1);

    const CargarUsuarios = async () => {
        const response = await reqResApi.get<ResResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        if (response.data.data.length > 0) {
            setUsuarios(response.data.data)
        } else {
            paginaRef.current--;
            alert('No hay mas registros')
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        CargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            CargarUsuarios();
        }
    }

    return {
        paginaAnterior,
        paginaSiguiente,
        usuarios
    }
}

export default useUsers
