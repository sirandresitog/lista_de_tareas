import "./App.css";
import logoFreeCodeCamp from "./imagenes/freecodecamp-logo.png";
import ListaDeTareas from "./componentes/ListaDeTareas";
function App() {
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
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
