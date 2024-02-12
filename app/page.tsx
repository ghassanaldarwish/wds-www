import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="rounded-none col-span-12 bg-secondary border-b  fixed w-screen top-0 left-0 z-10 h-[50px]">
        <div className=" flex items-center justify-between h-full w-full container p-0">
          <div className="flex gap-6 last:gap-2 items-center">
            <div className="font-bold text-2xl flex gap-2">wds</div>
          </div>
          <div className="flex gap-6 last:gap-2 items-center"></div>
        </div>
      </nav>
    </>
  );
}
