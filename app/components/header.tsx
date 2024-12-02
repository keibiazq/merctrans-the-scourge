export const Header = () => {

  return (
    <div className="bg-[url('/banner-bg.png')] bg-cover min-h-[164px] md:min-h-[630px] text-[#FFFFFF]">
      <div className="md:block hidden h-[25vh]" />
      <div className="flex flex-col pt-14 pl-4 h-[165px] text-xl md:text-7xl md:h md:pl-12">
        <div className="">
          MERCTRANS
        </div>
        <div className="relative top-[-9px] md:top-2 flex flex-row items-center pl-2 md:pl-[3.7rem]">
          <div className="text-4xl md:text-[8.1rem]">
            &
          </div>
          <div>
            THE SCOURGE
          </div>
        </div>
        <div className="relative top-[-15px] md:top-9 pl-2 md:pl-[3.7rem] text-[10px] md:text-[38.4px]">
          A Ghost-Hunting Tale of Game Localization
        </div>
      </div>
    </div>
  )
}