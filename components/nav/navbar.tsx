"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { title: "Learn" },
    { title: "Build" },
    { title: "Product" },
    { title: "Community" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (index: number): void => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="h-10 sm:h-auto my-6 sm:my-8 md:my-11 mx-4 sm:mx-12 md:mx-24 flex flex-wrap items-center justify-between bg-transparent">
      <h1 className="font-bold text-3xl md:text-4xl">Ether</h1>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle menu">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation items */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-6 mt-4 md:mt-0`}>
        {navItems.map((item, index) => (
          <li
            key={item.title}
            className="flex cursor-pointer hover:text-[#A694FF] items-center"
            onClick={() => handleItemClick(index)}>
            {item.title}
            <div className="transition-transform duration-200">
              <Image
                src="/dropdown.png"
                alt="#"
                width={24}
                height={24}
                className={activeItem === index ? "rotate-180" : ""}
              />
            </div>

            {/* Dropdown content - shown when active */}
            {activeItem === index && (
              <div className="absolute mt-40 bg-black shadow-md rounded-md p-2 min-w-32">
                <div className="py-1">
                  <a href="#" className="block px-2 py-1 hover:text-[#A694FF]">
                    Option 1
                  </a>
                  <a href="#" className="block px-2 py-1 hover:text-[#A694FF]">
                    Option 2
                  </a>
                  <a href="#" className="block px-2 py-1 hover:text-[#A694FF]">
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
