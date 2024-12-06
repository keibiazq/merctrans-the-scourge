import Image from "next/image";

export const Divider = () => {
  return (
    <div className="flex flex-row justify-center py-[18px]">
      <Image
        src="/divider.svg"
        alt="divider"
        width="300"
        height="1"
      />
    </div>
  );
}

