import {useState} from 'react'
import Header from "./components/Header"
import Formulario from "./components/formulario";
import ListadoPacientes from "./components/listadoPacientes";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const edad = 18;
// const imprime2mas2 = () =>{
//     console.log(2+2)
// }

// const toma1valor = (valor)=>{
//    console.log(valor)
// }
  return (
    <div className="container mx-auto mt-20">
    
      <Header
      // toma1valor={toma1valor}
      //  numeros={1}
      //  fn={imprime2mas2}
      />
      <div className="mt-12 md:flex">
      <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      />
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
