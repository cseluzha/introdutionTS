
// type, class, interface

interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion,
}

interface Direccion {
    pais: string,
    estado: string,
    casaNo: number,
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Chalchiuhcuauhtli SeLuZha',
        edad: 39,
        direccion: {
            pais: 'México',
            estado: 'Tijuana',
            casaNo: 10005,
        }
    }

    return (
        <>
            <h3> Objetos Literales</h3>
            {JSON.stringify(persona)}
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
