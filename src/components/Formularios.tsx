
import { useForm } from '../hooks/useForm';

interface userLogin {
    email: string,
    password: string,
}

const initialState: userLogin = {
    email: 'test@test.com',
    password: '123456',
}

export const Formularios = () => {

    const { formulario, email, password, onChange } = useForm<userLogin>(initialState)

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />
            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    )
}
