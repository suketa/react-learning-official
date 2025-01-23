export default function ColorSwitch({ onChangeColor }) {
  return <button onClick={(event)=>{ event.stopPropagation(); onChangeColor();}}>Change color</button>;
}
