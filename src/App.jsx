import Input from "./components/Input";
import Button from "./components/Button";

import "../src/styles/css/styles.css";

import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const funcaoLimpar = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const funcaoSomar = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const funcaoSubtrair = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const funcaoMultiplicar = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const funcaoDividir = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const funcaoTotal = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          funcaoSomar();
          break;
        case "-":
          funcaoSubtrair();
          break;
        case "*":
          funcaoMultiplicar();
          break;
        case "/":
          funcaoDividir();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="calc">
      <Input id="valor" value={currentNumber} />
      <Button id="limpar" label="C" onClick={funcaoLimpar} />
      <Button id="dividir" label="/" onClick={funcaoDividir} />
      <Button id="multiplicar" label="x" onClick={funcaoMultiplicar} />
      <Button id="ce" label="CE" onClick={funcaoLimpar} />
      <Button id="num7" label="7" onClick={() => handleAddNumber("7")} />
      <Button id="num8" label="8" onClick={() => handleAddNumber("8")} />
      <Button id="num9" label="9" onClick={() => handleAddNumber("9")} />
      <Button id="soma" label="+" onClick={funcaoSomar} />
      <Button id="num4" label="4" onClick={() => handleAddNumber("4")} />
      <Button id="num5" label="5" onClick={() => handleAddNumber("5")} />
      <Button id="num6" label="6" onClick={() => handleAddNumber("6")} />
      <Button id="subtracao" label="-" onClick={funcaoSubtrair} />
      <Button id="num1" label="1" onClick={() => handleAddNumber("1")} />
      <Button id="num2" label="2" onClick={() => handleAddNumber("2")} />
      <Button id="num3" label="3" onClick={() => handleAddNumber("3")} />
      <Button id="total" label="=" onClick={funcaoTotal} />
      <Button id="ponto" label=" " />
      <Button id="num0" label="0" onClick={() => handleAddNumber("0")} />
      <Button id="virgula" label=" " />
    </div>
  );
};
export default App;
