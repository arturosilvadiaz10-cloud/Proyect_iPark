import "./Home.css";

export default function Home({ irALogin }) {
  
  const caracteristicas = [
    {
      id: 1,
      titulo: "Acceso Ágil",
      descripcion: "Olvídate de los recibos de papel perdidos; todo se gestiona digitalmente."
    },
    {
      id: 2,
      titulo: "Cuentas Claras",
      descripcion: "Facturación automatizada basada en el tiempo exacto de permanencia."
    },
    {
      id: 3,
      titulo: "Gestión Eficiente",
      descripcion: "Diseñado para administradores que buscan optimizar su día a día."
    }
  ];

  return (
    <div className="home">

      <header className="hero">
        <nav className="navbar">
          <img className="logopark"   src="logo-_Park-blanco.png"></img>

          <button className="btn-login" onClick={irALogin}>
            Iniciar Sesión
          </button>
        </nav>

        <div className="hero-content">
          <img className="logopark"   src="logo-_Park-blanco.png"></img>

          <p className="hero-intro">
            Bienvenido a ¡Park, la solución digital que simplifica la gestión vehicular. 
            Nuestra aplicación web permite registrar vehículos al instante con códigos QR, 
            calcular tarifas de manera automática y monitorear el estado del parqueadero en tiempo real.
          </p>

        
          <ul className="hero-features-list">
            {caracteristicas.map((item) => (
              <li key={item.id} className="feature-item">
                <strong>{item.titulo}:</strong> {item.descripcion}
              </li>
            ))}
          </ul>
          <div>

          </div>
          <div>

          </div>

          <button className="btn-principal" onClick={irALogin}>
            Comenzar
          </button>
        </div>
      </header>

      <section className="beneficios">
        <h2>¿Qué puedes hacer con iPark?</h2>

        <div className="cards">
          <div className="card">
            <h3>🚗 Control de Vehículos</h3>
            <p>Registra entradas y salidas de vehículos en tiempo real.</p>
          </div>

          <div className="card">
            <h3>📊 Reportes</h3>
            <p>Consulta estadísticas y genera reportes diarios y mensuales.</p>
          </div>

          <div className="card">
            <h3>💳 Pagos</h3>
            <p>Administra tarifas y pagos de forma rápida y segura.</p>
          </div>

          <div className="card">
            <h3>🔒 Seguridad</h3>
            <p>Control de usuarios con acceso seguro al sistema.</p>
          </div>
        </div>
      </section>

      <section className="informacion">
        <h2>¿Por qué elegir iPark?</h2>
        <p>
          Nuestra plataforma permite optimizar la administración de
          parqueaderos públicos y privados mediante una interfaz sencilla,
          moderna y eficiente.
        </p>
      </section>

      <footer>
        © 2026 iPark - Sistema de Administración de Parqueaderos
      </footer>

    </div>
  );
}
