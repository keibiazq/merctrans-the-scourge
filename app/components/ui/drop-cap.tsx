interface DropCapProps {
  cap: string,
  text: string
}

export const DropCap = ({ cap, text }: DropCapProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="pr-2 text-8xl">{cap}</div>
      <div>
        {text}
      </div>
    </div>
  )
}