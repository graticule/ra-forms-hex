import { useState } from "react";
import HexInput from "./HexInput";
import RGBOutput from "./RGBOutput";

interface State {
  value: string,
  result: string,
  color: string
}

export default function HexForm() {
  const [state, setState] = useState({ value: "", result: "", color: "#ffffff" });

  const handleInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState((state: State) => ({ ...state, value }));
    if (value.length < 7) {
      setState((state: State) => ({ ...state, result: "" }));
      return;
    }
    if (value.length == 7 && RegExp("^#[0-9A-Fa-f]{6}$", "i").test(value)) {
      const r = parseInt(value.slice(1, 3), 16);
      const g = parseInt(value.slice(3, 5), 16);
      const b = parseInt(value.slice(5), 16);
      setState((state: State) => ({ ...state, result: `rgb(${r}, ${g}, ${b})`, color: value }));
    } else {
      setState((state: State) => ({ ...state, result: "Ошибка!" }));
    }
  }
  return (
    <>
      <div className="background" style={{ backgroundColor: state.color }}>
        <div className="form">
          <HexInput value={state.value} onChange={handleInput} />
          <RGBOutput result={state.result} style={{ backgroundColor: state.color }} />
        </div>
      </div>
    </>
  )
}