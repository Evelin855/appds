import { useState } from "react";

function Formulario({ calcular }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacion, setOperacion] = useState("sumar");

  function manejarEnvio(e) {
    e.preventDefault();

    if (num1 === "" || num2 === "") {
      alert("Completar los campos");
      return;
    }

    calcular(Number(num1), Number(num2), operacion);
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />

      <select
        value={operacion}
        onChange={(e) => setOperacion(e.target.value)}
      >
        <option value="sumar">Sumar</option>
        <option value="restar">Restar</option>
        <option value="multiplicar">Multiplicar</option>
        <option value="dividir">Dividir</option>
      </select>

      <button type="submit">Calcular</button>
    </form>
  );
}

export default Formulario;