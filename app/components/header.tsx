"use client"

import Image from "next/image"

export const Header = () => {

  return (
    <div className="relative z-50 text-[#FFFFFF]">
      <Image
        alt="banner"
        src="/banner-bg.png"
        width="1440"
        height="637"
        className="z-0 w-full"
      />
      <div className="top-0 absolute pt-[calc(100vw*637/1440/2)]">
        <div className="flex flex-col pl-[4vw] text-[5vw]">
          <div className="z-50">
            MERCTRANS
          </div>
          <div className="relative top-[-5.5vw] flex flex-row items-center pl-[3vw] ]">
            <div className="text-[11vw]">
              &
            </div>
            <div>
              THE SCOURGE
            </div>
          </div>
          <div className="relative top-[-9vw] pl-[3vw] text-[3vw]">
            A Ghost-Hunting Tale of Game Localization
          </div>
        </div>
      </div>

    </div>
  )
}