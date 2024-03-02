import NikkeLetter from "./nikke-letter";

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
        <NikkeLetter letter="L" delay={75} />
        <NikkeLetter letter="O" delay={100} />
        <p>A</p>
        <p>D</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
    </div>
  );
}
