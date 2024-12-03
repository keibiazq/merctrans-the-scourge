interface VideoProps {
  url: string
}

export const Video = ({ url }: VideoProps) => {
  return (
    <div className="relative left-[-4vw] md:static flex justify-center mb-[2vw] w-screen md:w-fit md:h-fit">
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