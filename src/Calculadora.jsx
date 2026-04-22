import { useState } from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";

function Calculadora() {
  const [resultado, setResultado] = useState(0);

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
  }

  return (
    <div>
      <Formulario calcular={calcular} />
      <Resultado resultado={resultado} />
    </div>
  );
}

export default Calculadora;