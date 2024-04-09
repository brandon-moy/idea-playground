import HomeCard from "@/components/HomeCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <HomeCard
        title="Infinite Scroll"
        href="/infinite-scroll"
        imageSrc="/scroll.gif"
        imageAlt="Gif of Infinite Scroll"
      />
    </main>
  );
}
