import { useState } from "react";
import HexInput from "./HexInput";
import RGBOutput from "./RGBOutput";

interface State {
  value: string,
  rgb?: number[]
}

export default function HexForm() {
  const [state, setState] = useState({value: "", rgb: undefined});

  const handleInput = (e) => {
    e.preventDefault();
    setState({ ...state, value: e.target.value });
    if(state.value.length == 7 && RegExp("^#[A-Fa-f0-9]{6}$").test(state.value)) {
      const hex = state.value.slice(1);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      setState({ ...state, rgb: [r, g, b] });
    }
  }
  return (
    <div className="background">
    <form action="" className="form" onSubmit={handleInput}>
      <HexInput value={state.value} onChange={handleInput}/>
      <RGBOutput rgb={state.rgb}/>
    </form>
    </div>
  )
}