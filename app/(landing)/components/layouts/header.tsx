import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const HeaderSection = () => {
  return (
    <header className="w-full flex px-28 py-8 items-center justify-between">
      {/* Logo */}
      <Image
        src={`/images/logo.svg`}
        width={113}
        height={0}
        alt="Personal Logo"
      />
      {/* Navigasi */}
      <nav className="flex gap-8 h-fit font-medium text-slate-500">
        <Link href={`#`} className="hover-nav">
          About
        </Link>
        <Link href={`#`} className="hover-nav">
          Services
        </Link>
        <Link href={`#`} className="hover-nav">
          Projects
        </Link>
        <Link href={`#`} className="hover-nav">
          Testimonial
        </Link>
        <Link href={`#`} className="hover-nav">
          Experiences
        </Link>
      </nav>
      {/* Contact Button*/}
      <button className="group flex items-center pl-3.5 pr-2 py-1.5 rounded-2xl bg-blue-500 text-white border-2 border-transparent cursor-pointer hover:bg-white hover:border-blue-500 hover:text-blue-500 transition-colors duration-150 ">
        <h2 className="font-bold tracking-wide mr-3 ">Contact</h2>
        {/* Icon */}
        <div className="p-2 rounded-xl bg-white text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <FiArrowUpRight size={24} />
        </div>
      </button>
    </header>
  );
};

export default HeaderSection;
