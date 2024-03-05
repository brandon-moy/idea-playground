import NikkeLoader from "@/components/spinners/nikke";

function LoadingSpinners() {
  return (
    <div className="w-[125px] h-[150px] border border-gray-600 rounded-xl bg-black">
      <p className="text-xs p-2 font-st-mono">NIKKE: Goddess of Victory</p>
      <NikkeLoader />
    </div>
  );
}

export default LoadingSpinners;
