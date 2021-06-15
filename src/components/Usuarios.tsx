import { Usuario } from '../interface/reqRes';
import useUsers from '../hooks/useUsers';

export const Usuarios = () => {
    const {  usuarios, paginaAnterior,paginaSiguiente } = useUsers();

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
                onClick={paginaAnterior}
            >
                Anterior
            </button>
            &nbsp;
            <button
                className="btn  btn-primary"
                onClick={paginaSiguiente}
            >
                Siguiente
            </button>
        </>
    )
}
