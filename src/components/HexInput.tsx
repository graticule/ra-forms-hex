interface Props {
  value: string, 
  onChange: (e) => void
}

export default function HexInput(props: Props) {
  const {value, onChange} = props;
  
  return (
    <input value={value} onChange={onChange} type="text" name="input" id="hex-input" />
  )

}