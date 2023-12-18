interface Props {
  rgb: number[] | undefined,
}
export default function RGBOutput({ rgb }:Props) {
  return (
    <div className="output">{rgb ? `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` : ""}</div>
  )
}