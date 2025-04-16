import Image from "next/image";

export default function HeroSection() {
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
      <div className="container mx-auto px-6 pt-8">
        {/* Header Section with Title and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
          {/* Left Column - Title */}
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Harnessing Artificial Intelligence Tools for Naturally Image
              Generator
            </h1>
          </div>

          {/* Right Column - Emojis and Text */}
          <div>
            <div className="text-4xl mb-4">🔥😍👍</div>
            <p className="text-lg md:text-xl font-normal opacity-90">
              In the realm of creativity, technology has become a powerful ally
              for artists, writers, designers, and creators of all kinds.
              Artificially intelligent (AI) tools have emerged as valuable
              companions, assisting naturally creative humans in their creative
              processes.
            </p>
          </div>
        </div>

        {/* Image Showcase Section */}
        <div className="flex justify-center items-center my-12 relative">
          {/* Main Image Cards Container */}
          <div className="relative w-full flex justify-between items-center">
            {/* Left Card - Bird Image */}
            <div className="w-[90%] mx-auto rounded-2xl overflow-hidden border-2 border-gray-700 relative">
              <Image
                src="/heroImage.png"
                alt="AI Generated Bird"
                width={500}
                height={300}
                className="w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded-lg">
                <span className="text-sm">AI Generator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Integration Section */}
        <div className="mt-24 mb-12">
          <p className="text-center text-purple-500 font-semibold uppercase text-sm tracking-wider mb-6">
            Powering tools and integrations from companies all around the world
          </p>

          <div className="flex flex-wrap justify-between items-center gap-6 mt-4">
            {companies.map((company) => (
              <div
                key={company.alt}
                className="opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={company.image}
                  alt={company.alt}
                  width={100}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
