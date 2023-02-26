import { useState } from "react";
import "./App.css";
import logoFreeCodeCamp from "./imagenes/freecodecamp-logo.png";
import Tarea from "./componentes/Tarea.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={logoFreeCodeCamp}
          alt="Logo de Freecodecamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>MIS TAREAS</h1>
        <Tarea texto="Aprender react" />
      </div>
    </div>
  );
}

export default App;
