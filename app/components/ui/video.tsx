interface VideoProps {
  url: string
}

export const Video = ({ url }: VideoProps) => {
  return (
    <div className="relative left-[-16px] md:static flex justify-center mb-3 md:pt-4 w-screen md:w-fit md:h-fit">
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