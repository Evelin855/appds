import { useState } from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Historial from "./Historial";

function Calculadora() {
  const [resultado, setResultado] = useState(0);
  const [historial, setHistorial] = useState([]);
  

  function calcular(num1, num2, operacion) {
    let res = 0;

    if (operacion === "sumar") res = num1 + num2;
    if (operacion === "restar") res = num1 - num2;
    if (operacion === "multiplicar") res = num1 * num2;
    if (operacion === "dividir") {
      if (num2 === 0) {
        res = "No se puede dividir por 0";
      } else {
        res = num1 / num2;
      }
    }

    setResultado(res);
    let simbolo = "";

    if (operacion === "sumar") simbolo = "+";
    if (operacion === "restar") simbolo = "-";
    if (operacion === "multiplicar") simbolo = "×";
    if (operacion === "dividir") simbolo = "÷";

    const nuevaOperacion = `${num1} ${simbolo} ${num2} = ${res}`; /* creo texto */

    setHistorial((prevHistorial) => { /* actualizo el estado de historial*/
      const nuevoHistorial = [nuevaOperacion, ...prevHistorial];/*nueva lista ordenada. ... spread operator (traer todos los elementos de la lista) */
      return nuevoHistorial.slice(0, 5); /*solo 5*/
});
  }

  return (
    <div>
      <Formulario calcular={calcular} />
      <Resultado resultado={resultado} />
      <Historial historial={historial} />
    </div>
  );
}

export default Calculadora;