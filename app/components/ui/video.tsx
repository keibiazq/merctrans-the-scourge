interface VideoProps {
  url: string
}

export const Video = ({ url }: VideoProps) => {
  return (
    <div className="relative md:static flex justify-center mb-4 w-full aspect-[1/1.8]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full object-cover"
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  )
}