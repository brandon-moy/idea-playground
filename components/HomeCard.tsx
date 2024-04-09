import Image from "next/image";
import Link from "next/link";

function HomeCard() {
  return (
    <div className="border border-white py-5 rounded-2xl">
      <p className="pb-5 pl-5">Infinite Scroll</p>
      <Link href="/infinite-scroll">
        <Image
          className="overflow-hidden"
          width={500}
          height={500}
          src="/scroll.gif"
          alt=""
        />
      </Link>
    </div>
  );
}

export default HomeCard;
