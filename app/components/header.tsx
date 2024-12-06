"use client"

export const Header = () => {

  return (
    <div className="bg-header bg-cover bg-center w-screen min-h-[164px] text-[#FFFFFF] aspect-[375/165.89]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col ml-3 pt-[20%] text-[22.4px] md:text-[86px]">
          <div className="relative top-1 leading-none">
            MERCTRANS
          </div>
          <div className="pl-4">
            <div className="flex flex-row items-center">
              <div className="text-[40px] leading-none">
                &
              </div>
              <div>
                THE SCOURGE
              </div>
            </div>
            <div className="text-[#F5F5F5] text-[10px]">
              A Ghost-Hunting Tale of Game Localization
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}