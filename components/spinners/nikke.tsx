export default function NikkeLoader() {
  return (
    // main container
    <div>
      {/* x  container */}
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* LOADING... container */}
      <div className="flex font-st-mono text-gray-300">
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
    </div>
  );
}
