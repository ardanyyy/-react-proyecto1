import {useState,useEffect} from 'react'
import Error from './Error'
function formulario({pacientes,setPacientes}) {
  const  [nombre, setNombre] = useState('');
  const  [propietario, setPropietario] = useState('');
  const  [email, setemail] = useState('');
  const  [fecha, setFecha] = useState('');
  const  [sintomas, setSintomas] = useState('');
  const  [error, setError] = useState(false);


  const handleSubmit = (e) =>{
     e.preventDefault();
     // Validacion del formulario

     if([nombre,propietario,email,fecha,sintomas].includes(''))
     {
      
      setError(true)
      return;
     }
     setError(false)
     const objetoPaciente = {
        nombre,propietario,email,fecha,sintomas
     }

     setPacientes([...pacientes, objetoPaciente])

     //Reiniciar el form
   setNombre('');
   setPropietario('');
   setemail('');
   setFecha('');
   setSintomas('');
   setError('');
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añadir Pacientes y {''}<span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form  onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
         {error && 
            <Error 
            mensaje='Todos los campos son obligatorios'
            />
         }
          <div className='mb-5'>
             <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
             <input id="mascota" type="text" placeholder='Nombre de la Mascota' value={nombre} onChange={(e)=> setNombre(e.target.value) } className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>
          <div className='mb-5'>
             <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
             <input id="propietario" type="text" placeholder='Nombre del propietario' value={propietario} onChange={(e)=> setPropietario(e.target.value)} className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>
          <div className='mb-5'>
             <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
             <input id="email" type="email" placeholder='Email Contacto propietario'  value={email} onChange={(e)=> setemail(e.target.value)}  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
             <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>alta</label>
             <input id="alta" type="date" value={fecha} onChange={(e)=> setFecha(e.target.value)}  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
             <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
             <textarea id="sintomas"  value={sintomas} onChange={(e)=> setSintomas(e.target.value)}  placeholder='Describe Los Sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></textarea>
          </div>
          <input
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value="Agregar Paciente"
          >
          </input>
      </form>
    </div>
  )
}

export default formulario

