import "./Heder.css";

function Heder() {
  return (
    <>
      <nav className="navbar navbar-expand fixed-top mt-2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a
                  className="nav-link active text-light bg-primary rounded-pill mx-auto p-2"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#Proyectos"
                >
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#Habilidades"
                >
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#Contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Heder;
