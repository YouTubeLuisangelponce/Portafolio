import "./Inicio.css";

function Inicio() {
  return (
    <div className="container-inicio d-flex aling-items-center justify-content-center mt-5 p-5">
      <div className="text">
        <h4>👋Hola, soy</h4>
        <h1>Braian</h1>
        <h5>
          <>Desarrollador Web</>
        </h5>
      </div>
      <div className="img">
        <img src="../../public/img/coding.png" alt="img" />
      </div>
    </div>
  );
}

export default Inicio;
