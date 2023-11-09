import React, { useEffect, useState } from 'react'
import { Error } from './Error';


export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)


  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);

    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  const handleSutmit = (e) => {
    e.preventDefault();

    // validacion del formulario

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log("Hay almenos un campo vacio")
      setError(true);
      return;
    }
    setError(false);
  
    // construimos un objeto de paciente para almacenar todos los datos 

    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
      // id: generarId()
    }

    if (paciente.id) {

      objPaciente.id = paciente.id

      const pacientesActualizads = pacientes.map(pacienteState => pacienteState.id ===
        paciente.id ? objPaciente : pacienteState)
      
      setPacientes(pacientesActualizads);
      setPaciente({});

    } else {
      //console.log("Nuevo registro")
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente])
    }

    // Reiniciar el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }



  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='font-black text-3xl text-center'> Seguimiento Pacientes </h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y {'  '}
        <span className='text-indigo-600 font-bold'> Administrarlos </span>
      </p>

      <form
        onSubmit={handleSutmit}
        className='bg-white shadow-md rounded-lg py-4 px-5 mb-10'>
        {error && <Error mensaje='todos los campos son obligatorios' />}
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase'> Nombre Mascota </label>
          <input
            id='mascota'
            type='text'
            placeholder='escribe el nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='nomb' className='block text-gray-700 font-bold uppercase'> Nombre del propietario </label>
          <input
            id='nomb'
            type='text'
            placeholder='escribe el nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 font-bold uppercase'> Email </label>
          <input
            id='email'
            type='email'
            placeholder='escriba el email del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'> Alta </label>
          <input
            id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase'> Sintomas </label>

          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
         </div>
          <input
            type='submit'
            className='bg-indigo-600 w-full p-3 text-white uppercase rounded-md
              hover:bg-indigo-700 cursor-pointer transition-colors mt-4'
            value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
       
      </form>
    </div>
  )
}
