interface Props {
  value: string, 
  onChange: (e) => void
}

export default function HexInput(props: Props) {
  const {value, onChange} = props;
  
  return (
    <input className="hex-input" value={value} onChange={onChange} type="text" name="input" id="hex-input" placeholder="Введите цвет в формате HEX"/>
  )

}