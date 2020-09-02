import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export default function Calculator() {
  const [result, setResult] = useState("0");

  const pressButton = (button) => {
    if (!isNaN(button)) {
      leftZeros(result, button);
    } else if (button === "=") {
      calculate();
    } else if (button === "AC") {
      reset();
    } else if (button === "C") {
      clean();
    } else {
      setResult(result.toString() + button.toString());
    }
  };

  const calculate = () => {
    let checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      const final = eval(checkResult);
      const finalResult = redondeoMagico(final);
      setResult(finalResult);
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("0");
  };

  const clean = () => {
    const limpieza = result.toString().slice(0, -1);
    if (limpieza === "") {
      setResult("0");
    } else {
      setResult(limpieza);
    }
  };

  const redondeoMagico = (number) => +(Math.round(number + "e+4") + "e-4");

  const leftZeros = (number, deseado) => {
    if (number === "0") {
      setResult(deseado);
    } else {
      setResult(result.toString() + deseado.toString());
    }
  };

  const doubleOperator = (cuenta, simbolo) => {
   
  };

  return (
    <div id="display">
      <Display screen={result} />
      <Buttons pressButton={pressButton} />
    </div>
  );
}
