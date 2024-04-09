import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
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
    </main>
  );
}
