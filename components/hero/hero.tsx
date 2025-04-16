import Image from "next/image";
import Navbar from "../nav/navbar";
export default function HeroSection() {
  const companies = [
    {
      image: "/brave.png",
    },
    {
      image: "/circle.png",
    },
    {
      image: "/discord.png",
    },
    {
      image: "/google.png",
    },
    {
      image: "/jump.png",
    },
    {
      image: "/lolia.png",
    },
    {
      image: "/magic_eden.png",
    },
  ];
  return (
    <div
      className="p-0"
      style={{
        backgroundImage: "url('/ethereclipse.png')",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "top",
      }}>
      <Navbar />
      <section className="header-title flex items-center">
        <h1 className="text-7xl font-semibold">
          Harnessing Artificial Intelligence Tools for Naturally Image Generator
        </h1>

        <div>
          <div className="text-5xl mb-7">🔥😍👍</div>
          <p className="font-normal text-2xl">
            In the realm of creativity, technology has become a powerful ally
            for artists, writers, designers, and creators of all kinds.
            Artificially intelligent (AI) tools have emerged as valuable
            companions, assisting naturally creative humans in their creative
            processes.
          </p>
        </div>
      </section>

      <section className="">
        <Image src="/heroImage.png" alt="#" height={329} width={1243} />
      </section>

      <p className="text-center text-[#6843EC] font-semibold uppercase ">
        Powering tools and integrations from companies all around the world
      </p>

      <div className="company-collection flex justify-between gap-3 items-center">
        {companies.map((company) => (
          <Image
            src={company.image}
            key={company.image}
            alt={company.image}
            height={38}
            width={114}
          />
        ))}
      </div>

    
    </div>
  );
}
