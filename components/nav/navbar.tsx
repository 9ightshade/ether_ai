import Image from "next/image";
export default function Navbar() {
  const navItems = [
    {
      title: "Learn",
    },
    {
      title: "Build",
    },
    {
      title: "Product",
    },
    {
      title: "Community",
    },
  ];

  return (
    <div className="h-10  my-11 mx-24 flex justify-between bg-transparent">
      <h1 className="font-bold text-4xl">Ether</h1>

      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li
            key={item.title}
            className="flex cursor-pointer hover:text-[#A694FF] items-center">
            {item.title}
            <Image src="/dropdown.png" alt="#" width={24} height={24} />
          </li>
        ))}
      </ul>
    </div>
  );
}
