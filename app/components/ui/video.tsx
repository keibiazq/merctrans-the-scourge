interface VideoProps {
  url: string
}

export const Video = ({ url }: VideoProps) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full object-cover"
    >
      <source src={url} type="video/mp4" />
    </video>
  )
}