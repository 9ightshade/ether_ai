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

      <section className="features flex justify-between gap-3 ">
        <div className="w-[530px] h-[357px] p-11 bg-[#292929] rounded-2xl">
          <h2 className="font-normal text-4xl">
            Automated Image Synthesis and Design
          </h2>
          <p className="text-2xl font-normal text-[#C4C4C4]">
            With AI-powered image generation, designers and creatives can
            streamline their workflows and unlock new levels of efficiency.
          </p>
          <div className="flex items-center gap-4 justify-between">
            <button className="border border-white rounded-[30px] flex items-center gap-4 py-4 px-10 cursor-pointer hover:text-[#A694FF]">
              YOUTUBE{" "}
              <Image src="/youtube.png" alt="#" width={26} height={19} />
            </button>
            <button className="border border-white rounded-[30px] flex items-center gap-4 py-4 px-10 cursor-pointer hover:text-[#A694FF]">
              PODCAST
              <div className="bg-gradient-to-b from-[#F452FF] to-[#832BC1] h-6 w-6 p-1 rounded">
                <Image src="/podcast.png" alt="#" width={23} height={19} />
              </div>
            </button>
          </div>
        </div>

        <div className="w-[530px] h-[357px] p-11 bg-[#292929] rounded-2xl">
          <h2 className="font-normal text-4xl">
            Create stunning visual in seconds
          </h2>
          <p className="text-2xl font-normal text-[#C4C4C4]">
            Generating innovative ideas is a crucial aspect of any creative
            endeavor. AI tools can help spark inspiration by analyzing vast
            amounts of data
          </p>
          <div className="flex items-center gap-4 justify-center bg-[#0A0A0A] rounded-[45px] py-4 px-5">
            <input
              type="text"
              placeholder="Write Prompt to generate image"
              className="text-[#848895] outline-none w-60"
            />
            <button className="text-[#000000] font-medium text-xl py-3.5 px-5 bg-[#B3D73B] rounded-[30px] cursor-pointer">
              Generate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
