import NikkeLoader from "@/components/spinners/nikke";

function LoadingSpinners() {
  return (
    <div className="flex">
      <div className="w-[125px] h-[150px] border border-gray-600 rounded-xl bg-black">
        <p className="text-xs p-2 font-st-mono text-white">
          NIKKE: Goddess of Victory
        </p>
        <NikkeLoader mode="dark" />
      </div>
      <div className="w-[125px] h-[150px] border border-gray-600 rounded-xl bg-white">
        <p className="text-xs p-2 font-st-mono text-black">
          NIKKE: Goddess of Victory
        </p>
        <NikkeLoader mode="light" />
      </div>
    </div>
  );
}

export default LoadingSpinners;
