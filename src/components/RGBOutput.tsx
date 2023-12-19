interface Props {
  result: string,
}
export default function RGBOutput({ result }:Props) {
  return (
    <div className="output"><p className="output-text">{result}</p></div>
  )
}