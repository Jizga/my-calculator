import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <div className="operatorButtons">
        <button
          id="allClear"
          value="AC"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          AC
        </button>
        <button
          id="clear"
          value="C"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          C
        </button>
        <button
          id="divide"
          value="/"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          /
        </button>
        <button
          id="multiply"
          value="*"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          *
        </button>
        <button
          id="add"
          value="+"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          +
        </button>
        <button
          id="subtract"
          value="-"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          -
        </button>
        <button
          id="equals"
          value="="
          onClick={(e) => props.pressButton(e.target.value)}
        >
          =
        </button>
      </div>

      <div className="numbersButtons">
        <button
          id="zero"
          value="0"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          0
        </button>
        <button
          id="one"
          value="1"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          1
        </button>
        <button
          id="two"
          value="2"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          2
        </button>
        <button
          id="three"
          value="3"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          3
        </button>
        <button
          id="four"
          value="4"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          4
        </button>
        <button
          id="five"
          value="5"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          5
        </button>
        <button
          id="six"
          value="6"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          6
        </button>
        <button
          id="seven"
          value="7"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          7
        </button>
        <button
          id="eight"
          value="8"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          8
        </button>
        <button
          id="nine"
          value="9"
          onClick={(e) => props.pressButton(e.target.value)}
        >
          9
        </button>
        <button
          id="decimal"
          value="."
          onClick={(e) => props.pressButton(e.target.value)}
        >
          .
        </button>
      </div>
    </div>
  );
}
