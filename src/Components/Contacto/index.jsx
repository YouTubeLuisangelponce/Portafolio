import React from "react";

function Contacto() {
  return (
    <div
      id="Contacto"
      className="d-flex aling-items-center justify-content-center flex-wrap mt-1 p-5"
    >
      <h1 className="titulo">Contacto</h1>
      <a href="#">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/linkedin.png"
          alt="linkedin"
        />
      </a>
      <a href="https://github.com/YouTubeLuisangelponce" target="_black">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/github.png"
          alt="github"
        />
      </a>
    </div>
  );
}

export default Contacto;
