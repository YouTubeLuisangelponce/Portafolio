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
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTeZviLMEiGyi55xgDmloV1oSgTsHwnn5kLPafuFzcxmNS0XYH9"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Inicio;
