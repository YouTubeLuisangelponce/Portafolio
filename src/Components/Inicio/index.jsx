import "./Inicio.css";
import img from "/public/asset/img/coding.png";

function Inicio() {
  return (
    <div className="container-inicio d-flex aling-items-center justify-content-center mt-5 p-5">
      <div className="text">
        <h4>👋Hola, soy</h4>
        <h1>Luis Angel Ponce Alvarez</h1>
        <h5>
          <>Desarrollador Web</>
        </h5>
        <p>Este es un portafolio de un tutorial</p>
      </div>
      <div className="img">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default Inicio;
