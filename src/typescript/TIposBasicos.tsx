
export const TIposBasicos = () => {

    /*
     Note: can you use for example
     let nombre: string | number = 'Chalchiuhcuauhtli';
     nombre= 123;
     if you nedd mutate the variable nombre
    */
    const nombre: string = 'Chalchiuhcuauhtli';
    const edad: number = 39;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

    return (
        <>
            <h3>Tipo básicos</h3>
            {nombre} , {edad} - {(estaActivo) ? 'Activo' : 'No Activo'}
            <br />
             {poderes.join(', ')}
        </>
    )
}
