import {useEffect, useState} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    const [ pacientes, setPacientes ] = useState([]);
    const [ paciente, setPaciente ] = useState({});

    function elimarPaciente (id) {
        const pacientesActualizados = pacientes.filter( patient => patient.id !== id );
        setPacientes(pacientesActualizados);
    }

    useEffect(() => {
        function obtenerLS() {
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            setPacientes(pacientesLS);
        }
        obtenerLS();
    },[]);

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    },[pacientes]);

  return (
    <>
        <Header />
        <div className={"mt-12 md:flex container mx-auto"}>
            <Formulario
                pacientes={pacientes}
                setPacientes={setPacientes}
                paciente={paciente}
                setPaciente={setPaciente}
            />
            <ListadoPacientes
                pacientes={pacientes}
                setPaciente={setPaciente}
                eliminarPaciente={elimarPaciente}
            />
        </div>
    </>
  )
}

export default App