"use client";
import Image from "next/image";

export default function CommunityMetrics() {
  const metrics = [
    {
      title: "ACTIVE ACCOUNTS",
      metric: "10.2M+",
      gradient: "from-[#6843EC] to-[#D2FF3A]",
    },
    {
      title: "PROJECTS",
      metric: "300+",
      gradient: "from-[#6843EC] to-[#D2FF3A]",
    },
    {
      title: "TOPICS",
      metric: "1000+",
      gradient: "from-[#6843EC] to-[#D2FF3A]",
    },
  ];

  return (
    <div
      className="w-full bg-black text-white py-11"
      style={{
        backgroundImage: "url('/communitybg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <section className="features flex flex-col md:flex-row justify-center gap-6 max-w-[90%] mx-auto px-4 py-12">
        {/* First Card */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#1A1A1A] space-y-4 rounded-2xl border border-[#333333]">
          <h2 className="font-normal text-2xl md:text-3xl lg:text-4xl text-white">
            Automated Image Synthesis and Design
          </h2>
          <p className="text-base md:text-lg text-[#C4C4C4] my-6 leading-relaxed">
            With AI-powered image generation, designers and creatives can
            streamline their workflows and unlock new levels of efficiency.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="border border-[#444] rounded-full flex cursor-pointer items-center gap-2 py-3 px-6 text-sm transition-colors hover:border-[#A694FF] hover:text-[#A694FF]">
              YOUTUBE
              <div className="h-5 w-5 flex items-center justify-center">
                <Image
                  src="/youtube.png"
                  alt="YouTube icon"
                  width={20}
                  height={14}
                />
              </div>
            </button>
            <button className="border border-[#444] rounded-full flex items-center cursor-pointer gap-2 py-3 px-6 text-sm transition-colors hover:border-[#A694FF] hover:text-[#A694FF]">
              PODCAST
              <div className="bg-gradient-to-b from-[#F452FF] to-[#832BC1] h-5 w-5 rounded flex items-center justify-center">
                <Image
                  src="/podcast.png"
                  alt="Podcast icon"
                  width={14}
                  height={14}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#1A1A1A] space-y-4 rounded-2xl border border-[#333333] mt-8 md:mt-0">
          <h2 className="font-normal text-2xl md:text-3xl lg:text-4xl text-white">
            Create stunning visual in seconds
          </h2>
          <p className="text-base md:text-lg text-[#C4C4C4] my-6 leading-relaxed">
            Generating innovative ideas is a crucial aspect of any creative
            endeavor. AI tools can help spark inspiration by analyzing vast
            amounts of data.
          </p>
          <div className="flex items-center bg-[#0A0A0A] rounded-full py-2 px-4 gap-3">
            <input
              type="text"
              placeholder="Write Prompt To Generate Image"
              className="bg-transparent text-[#848895] outline-none flex-grow px-2 py-2 text-sm min-w-0"
            />
            <button className="text-black font-medium text-sm py-2 cursor-pointer px-5 bg-[#B3D73B] rounded-full transition-transform hover:scale-105 whitespace-nowrap">
              Generate
            </button>
          </div>
        </div>
      </section>

      <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-evenly py-7 gap-8 md:gap-0">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Join a community
            <br />
            of millions.
          </h2>
        </div>

        <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-8 md:gap-12 justify-between md:justify-start">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex flex-col items-start min-w-[90px] md:min-w-auto">
              <h2
                className={`bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent font-medium`}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  lineHeight: 1,
                }}>
                {metric.metric}
              </h2>
              <p className="text-gray-400 text-xs md:text-sm lg:text-base uppercase mt-1 tracking-wide">
                {metric.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
