import Image from "next/image";
import Link from "next/link";

interface HomeCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

function HomeCard({ title, href, imageSrc, imageAlt }: HomeCardProps) {
  return (
    <div className="border border-white py-5 rounded-2xl">
      <p className="pb-5 pl-5">{title}</p>
      <Link href={href}>
        <Image
          className="overflow-hidden"
          width={500}
          height={500}
          src={imageSrc}
          alt={imageAlt}
        />
      </Link>
    </div>
  );
}

export default HomeCard;
