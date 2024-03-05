export default function NikkeLoader() {
  return (
    // main container
    <>
      {/* x  container */}
      <div className="w-full flex justify-center">
        <div className="w-[50px] h-[50px] flex flex-wrap mb-2 scale-90 animate-[nikkeLoad_4s_linear_infinite]">
          <div className="relative basis-1/2">
            <div className="w-[15px] h-[2.5px] rotate-45 absolute translate-x-1 translate-y-[0.6rem] animate-[nikkeLightX_4s_ease_infinite]"></div>
            <div className="w-[15px] h-[4px] -rotate-45 absolute translate-x-[0.23rem] translate-y-[0.55rem] border-t-[1.5px] border-black animate-[nikkeLightX_4s_ease_infinite]"></div>
          </div>
          <div className="relative basis-1/2">
            <div className="w-[15px] h-[2.5px] rotate-45 absolute translate-x-1 translate-y-[0.6rem] animate-[nikkeDarkX_4s_ease_infinite]"></div>
            <div className="w-[15px] h-[4px] -rotate-45 absolute translate-x-[0.23rem] translate-y-[0.55rem] border-t-[1.5px] border-black animate-[nikkeDarkX_4s_ease_infinite]"></div>
          </div>
          <div className="relative basis-1/2">
            <div className="w-[15px] h-[2.5px] rotate-45 absolute translate-x-1 translate-y-[0.6rem] animate-[nikkeDarkX_4s_ease_infinite]"></div>
            <div className="w-[15px] h-[4px] -rotate-45 absolute translate-x-[0.23rem] translate-y-[0.55rem] border-t-[1.5px] border-black animate-[nikkeDarkX_4s_ease_infinite]"></div>
          </div>
          <div className="relative basis-1/2">
            <div className="w-[15px] h-[2.5px] rotate-45 absolute translate-x-1 translate-y-[0.6rem] animate-[nikkeLightX_4s_ease_infinite]"></div>
            <div className="w-[15px] h-[4px] -rotate-45 absolute translate-x-[0.23rem] translate-y-[0.55rem] border-t-[1.5px] border-black animate-[nikkeLightX_4s_ease_infinite]"></div>
          </div>
        </div>
      </div>
      {/* LOADING... container */}
      <div className="flex text-xs font-st-mono text-gray-300 tracking-tighter px-10">
        <p className="animate-letter-jump m-0">L</p>
        <p className="animate-letter-jump animation-delay-250 m-0">O</p>
        <p className="animate-letter-jump animation-delay-500 m-0">A</p>
        <p className="animate-letter-jump animation-delay-750 m-0">D</p>
        <p className="animate-letter-jump animation-delay-1000 m-0">I</p>
        <p className="animate-letter-jump animation-delay-1250 m-0">N</p>
        <p className="animate-letter-jump animation-delay-1500 m-0">G</p>
        <p className="animate-letter-jump animation-delay-1750 m-0">.</p>
        <p className="animate-letter-jump animation-delay-2000 m-0">.</p>
        <p className="animate-letter-jump animation-delay-2250 m-0">.</p>
      </div>
    </>
  );
}
