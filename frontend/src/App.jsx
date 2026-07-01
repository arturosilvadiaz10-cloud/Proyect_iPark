import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

// Importación de tus módulos existentes
import Tablero from "./tablero";
import MapaCeldas from "./MapaCeldas";
import RegistroEntrada from "./RegistroEntrada";
import ReporteHistorico from "./ReporteHistorico";

import "./style.css";

export default function App() {
  const [pantalla, setPantalla] = useState("home");
  
  // Estado para saber qué pestaña del parqueadero mostrar dentro del panel de administración
  const [seccionInterna, setSeccionInterna] = useState("tablero");

  switch (pantalla) {
    case "home":
      return <Home irALogin={() => setPantalla("login")} />;

    case "login":
      return (
        <Login
          irARegistro={() => setPantalla("register")}
          alIniciarSesion={() => setPantalla("panel")} 
        />
      );

    case "register":
      return (
        <Register 
          irALogin={() => setPantalla("login")} 
          alRegistrarse={() => setPantalla("login")} // Cambia a "panel" si prefieres que entre directo al sistema
        />
      );

    case "panel":
      return (
        <div style={{ display: "flex", height: "100vh", background: "#f4f6f9", fontFamily: "sans-serif" }}>
          
          {/* MENÚ LATERAL IZQUIERDO */}
          <aside style={{ width: "260px", background: "#0f2c74", color: "white", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
                <img className="logoparkj" src="logo-_Park-blanco.png" alt="Logo" />
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button 
                  onClick={() => setSeccionInterna("tablero")}
                  style={{ background: seccionInterna === "tablero" ? "rgba(255,255,255,0.15)" : "transparent", color: "white", textAlign: "left", padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", width: "100%", fontWeight: "600" }}
                >
                  📊 Tablero Principal
                </button>

                <button 
                  onClick={() => setSeccionInterna("mapa")}
                  style={{ background: seccionInterna === "mapa" ? "rgba(255,255,255,0.15)" : "transparent", color: "white", textAlign: "left", padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", width: "100%", fontWeight: "600" }}
                >
                  🗺️ Mapa de Celdas
                </button>

                <button 
                  onClick={() => setSeccionInterna("entrada")}
                  style={{ background: seccionInterna === "entrada" ? "rgba(255,255,255,0.15)" : "transparent", color: "white", textAlign: "left", padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", width: "100%", fontWeight: "600" }}
                >
                  🎟️ Registro Entrada
                </button>

                <button 
                  onClick={() => setSeccionInterna("reporte")}
                  style={{ background: seccionInterna === "reporte" ? "rgba(255,255,255,0.15)" : "transparent", color: "white", textAlign: "left", padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", width: "100%", fontWeight: "600" }}
                >
                  📋 Reporte Histórico
                </button>
              </div>
            </div>

            <button 
              onClick={() => setPantalla("home")}
              style={{ background: "#f19914", color: "white", padding: "12px", borderRadius: "8px", fontWeight: "bold", border: "none", cursor: "pointer", width: "100%" }}
            >
              Cerrar Sesión
            </button>
          </aside>

          {/* ÁREA DE CONTENIDO DINÁMICO */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <header style={{ background: "white", padding: "20px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", textTransform: "uppercase", margin: 0 }}>
                {seccionInterna === "tablero" && "Dashboard Informativo"}
                {seccionInterna === "mapa" && "Control de Bahías"}
                {seccionInterna === "entrada" && "Admisión de Vehículos"}
                {seccionInterna === "reporte" && "Auditoría Interna"}
              </h1>
              <span style={{ color: "#666", fontSize: "14px", fontWeight: "600" }}>Rol: Administrador</span>
            </header>

            <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
              {seccionInterna === "tablero" && <Tablero />}
              {seccionInterna === "mapa" && <MapaCeldas />}
              {seccionInterna === "entrada" && <RegistroEntrada />}
              {seccionInterna === "reporte" && <ReporteHistorico />}
            </main>
          </div>
        </div>
      );

    default:
      return <Home irALogin={() => setPantalla("login")} />;
  }
}