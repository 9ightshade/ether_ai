import Image from "next/image"
export default function CommunityCarousel(){
    return(
        <div className="flex flex-col w-full bg-black text-white">
        {/* Header */}
        <div className="py-4 px-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Journey Through Art of community</h1>
        </div>
  
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Left panel - Beach sunset with graffiti */}
          <div className="relative overflow-hidden h-64 md:h-96 col-span-1 md:col-span-1">
            <Image 
              src="/api/placeholder/800/600" 
              alt="Sunset beach with graffiti wall" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <div className="text-purple-600 text-4xl font-bold">0</div>
              <div className="text-xs">PHOTOS BY</div>
              <div className="text-xs">FLORENCE</div>
            </div>
          </div>
  
          {/* Middle panel - Vintage car */}
          <div className="relative overflow-hidden h-64 md:h-96">
            <img 
              src="/api/placeholder/500/600" 
              alt="Vintage teal truck" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
              <div className="text-green-500 text-4xl font-bold">48,000</div>
              <div className="text-xs">IMAGES GENERATED BY</div>
              <div className="text-xs">ARTIFICIAL INTELLIGENCE</div>
            </div>
          </div>
  
          {/* Right panel - Winter scene */}
          <div className="relative overflow-hidden h-64 md:h-96">
            <img 
              src="/api/placeholder/500/600" 
              alt="Snowy mountain path" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-1 h-32">
          <div className="relative overflow-hidden">
            <img 
              src="/api/placeholder/400/200" 
              alt="Historic building" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-purple-900"></div>
          <div className="bg-purple-700"></div>
        </div>
      </div>
    )
}