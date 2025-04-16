import {
  FaSquareYoutube,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white py-12 px-8 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left section - Brand and social */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-medium mb-1">Ether</h2>
            <p className="text-gray-400 text-sm">
              Managed by Artificial Intelligence
            </p>

            {/* Social media icons */}
            <div className="flex space-x-3 mt-2">
              {[
                FaSquareYoutube,
                FaTwitter,
                FaDiscord,
                FaReddit,
                FaGithub,
                FaTelegram,
              ].map((Icon, index) => (
                <div key={index}>
                  <a key={index} href="#" className="">
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start justify-evenly">
            {/* Middle section - Ether links */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-medium uppercase text-white mb-2">
                ETHER
              </h3>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Grants
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Generator
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Careers
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Disclaimer
              </a>
            </div>

            {/* Right section - Connected links */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-medium uppercase text-white mb-2">
                GET CONNECTED
              </h3>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Services
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Blog
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
