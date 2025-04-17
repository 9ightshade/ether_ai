"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const companies = [
    { image: "/brave.png", alt: "Brave" },
    { image: "/circle.png", alt: "Circle" },
    { image: "/discord.png", alt: "Discord" },
    { image: "/google.png", alt: "Google" },
    { image: "/jump.png", alt: "Jump" },
    { image: "/lolia.png", alt: "Lolia" },
    { image: "/magic_eden.png", alt: "Magic Eden" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Main Hero Content */}
      <div
        className={`container mx-auto px-4 sm:px-6 pt-8 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}>
        {/* Header Section with Title and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left Column - Title */}
          <div className="order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 md:mb-8">
              Harnessing Artificial Intelligence Tools for Naturally Image
              Generator
            </h1>
          </div>
          {/* Right Column - Emojis and Text */}
          <div className="order-2">
            <div className="text-3xl sm:text-4xl mb-3 md:mb-4">🔥😍👍</div>
            <p className="text-base sm:text-lg md:text-xl font-normal opacity-90">
              In the realm of creativity, technology has become a powerful ally
              for artists, writers, designers, and creators of all kinds.
              Artificially intelligent (AI) tools have emerged as valuable
              companions, assisting naturally creative humans in their creative
              processes.
            </p>
          </div>
        </div>

        {/* Image Showcase Section */}
        <div className="flex justify-center items-center relative">
          {/* Main Image Cards Container */}
          <div className="relative w-full flex justify-between items-center">
            {/* Left Card - Bird Image */}
            <div className="w-full sm:w-[90%] mx-auto rounded-lg md:rounded-2xl overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <Image
                  src="/heroImage.png"
                  alt="AI Generated Bird"
                  layout="fill"
                  objectFit="contain"
                  priority
                  className="transition-transform duration-700"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company Integration Section */}
        <div className="">
          <p className="text-center text-[#6843EC] font-semibold uppercase text-xs sm:text-sm tracking-wider mb-4 md:mb-6">
            Powering tools and integrations from companies all around the world
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 mt-4 place-items-center">
            {companies.map((company) => (
              <div
                key={company.alt}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <Image
                  src={company.image}
                  alt={company.alt}
                  width={100}
                  height={32}
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
