import "./Habilidades.css";

function Habilidades() {
  return (
    <div
      id="Habilidades"
      className="containerhabilidades d-flex aling-items-center justify-content-center flex-wrap mt-5 p-5"
    >
      <h1 className="titulo">Habilidades</h1>
      <div className="contenedorHabilidades d-flex">
        <div className="container">
          <img
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
          <p>Html5</p>
        </div>
        <div className="container">
          <img src="https://img.icons8.com/color/48/css3.png" alt="css3" />
          <p>css3</p>
        </div>
        <div className="container">
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
          <p>Javascript</p>
        </div>
        <div className="container">
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
            alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
          />
          <p>React</p>
        </div>
        <div className="container">
          <img src="https://img.icons8.com/color/48/git.png" alt="git" />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
