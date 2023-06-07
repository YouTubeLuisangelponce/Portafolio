import "./Proyects.css";
import proyecto1 from "/public/asset/proyects/proyecto1.png";
import proyecto2 from "/public/asset/proyects/proyecto2.png";
import proyecto3 from "/public/asset/proyects/proyecto3.png";
import proyecto4 from "/public/asset/proyects/proyecto4.png";

function Proyects() {
  return (
    <div id="Proyectos">
      <h1 className="title text-center">Proyectos</h1>
      <div className="proyect d-flex d-inline-flex flex-wrap justify-content-center">
        <a href="sdfs">
          <div className="card bg-secondary m-2">
            <img src={proyecto1} alt="img" />
            <h3 className="p-2">Búzon correo</h3>
          </div>
        </a>
        <a href="sdfs">
          <div className="card bg-secondary m-2">
            <img src={proyecto2} alt="img" />
            <h3 className="p-2">Viajes</h3>
          </div>
        </a>
        <a href="adfsd">
          <div className="card bg-secondary m-2">
            <img src={proyecto3} alt="img" />
            <h3 className="p-2">To do list</h3>
          </div>
        </a>
        <a href="/sdfsdfs">
          <div className="card bg-secondary m-2">
            <img src={proyecto4} alt="img" />
            <h3 className="p-2">Datos inmobiliarios</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Proyects;
