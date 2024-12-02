export function Video() {
  return (
    <div className="relative left-[-16px] md:left-[-317px] flex justify-center mb-3 w-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}