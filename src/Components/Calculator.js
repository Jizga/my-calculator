import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import './Calculate.css'

export default function Calculator() {
  const [result, setResult] = useState("0");

  const pressButton = (button) => {
    if (!isNaN(button)) {
      leftZeros(result, button);
    } else if (button === "+" || button === "*" || button === "/") {
      changeOperator(button);
    } else if (button === ".") {
      changePoint(button);
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
      // eslint-disable-next-line
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

  const changeOperator = (simbol) => {
    let lastCharacter = result.substr(result.length - 1);
    if (
      lastCharacter === "+" ||
      lastCharacter === "*" ||
      lastCharacter === "/"
    ) {
      setResult(result.slice(0, -1) + simbol);
    } else {
      setResult(result.toString() + simbol.toString());
    }
  };

  const changePoint = (point) => {
    if (!/[.]/.test(result.toString())) {
      setResult(result.toString() + point);
    } else if (/[\+\-\/\*]/.test(result.toString())) {
      const parts = result.split(/[\+\-\/\*]/g);
      const lastPart = parts[parts.length - 1];
      if (!/[.]/.test(lastPart.toString())) {
        setResult(result.toString() + point);
      }
    }
  };

  return (
    <div className="calculator">
      <Display className="formulaScreen" screen={result} />
      <Buttons pressButton={pressButton} />
    </div>
  );
}
