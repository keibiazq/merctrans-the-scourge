interface DropCapProps {
  cap: string,
  text: string
}

export const LuxCap = ({ cap, text }: DropCapProps) => {
  return (
    <div className="flex flex-row justify-center items-center text-xl md:text-4xl">
      <span className="font-luxurious text-6xl md:text-8xl">{cap}</span>
      &nbsp; {text}
    </div>
  )
}