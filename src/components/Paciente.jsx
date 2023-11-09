import React from 'react'

export const Paciente = ({ paciente, setPaciente , eliminarPaciente}) => {

    // destructurar
    const { nombre, propietario, email, fecha, sintomas ,id} = paciente

    const handEliminar = () => {
        const respuesta = confirm("Desea eliminar este paciente?");
        if (respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <div className='font-bold m-3 bg-white shadow-md px-5 py-10 rounded-xl uppercase'>
            <p className='font-bold mb-3 text-gray-700 uppercase'> nombre de la mascota: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha ALTa: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={handEliminar}
                >
                    Eliminar

                </button>
            </div>

        </div>
    )
}
