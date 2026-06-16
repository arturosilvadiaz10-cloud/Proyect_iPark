import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./style.css";

export default function App() {
  const [pantalla, setPantalla] =
    useState("login");

  return pantalla === "login" ? (
    <Login
      irARegistro={() =>
        setPantalla("register")
      }
    />
  ) : (
    <Register
      irALogin={() =>
        setPantalla("login")
      }
    />
  );
}