import Image from "next/image";
import {
  FiArrowUpRight,
  FiDribbble,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="w-full p-28">
      <div className="flex flex-col h-fit w-fit gap-10">
        <div className="flex  w-fit items-start gap-4">
          <Image
            src={`/images/icon-logo.svg`}
            width={64}
            height={0}
            alt="Icon Logo"
            className="shadow-2xl bg-transparent rounded-2xl"
          />
          <div className=" gap-1 flex flex-col">
            <h2 className="text-[24px] font-bold text-slate-800">
              Muhammad Helmy
            </h2>
            <p className="text-slate-500 mb-2">Junior Fullstack Developer</p>
            <div className="flex gap-3 text-xl text-slate-500">
              <FiTwitter />
              <FiFacebook />
              <FiDribbble />
            </div>
          </div>
        </div>
        <div>
          <h1 className="w-2/3 text-4xl tracking-wide leading-tight">
            I help brands stand out through visual design, engaging content, and
            clear communication strategies.
          </h1>
        </div>
        <div className="flex gap-3">
          <button className="group flex items-center pl-3.5 pr-2 py-1.5 rounded-2xl bg-blue-500 text-white border-2 border-transparent cursor-pointer hover:bg-white hover:border-blue-500 hover:text-blue-500 transition-colors duration-150 ">
            <h2 className="font-bold tracking-wide mr-3 ">Contact me</h2>
            {/* Icon */}
            <div className="p-2 rounded-xl bg-white text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <FiArrowUpRight size={24} />
            </div>
          </button>
          <button className="group flex items-center pl-3.5 pr-2 py-1.5 rounded-2xl bg-transparent text-black border-2 border-slate-400 cursor-pointer hover:bg-white hover:border-blue-500 hover:text-blue-500 transition-colors duration-150 ">
            <h2 className="font-bold tracking-wide mr-3">View portofolio</h2>
            {/* Icon */}
            <div className="p-2 rounded-xl bg-black text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <FiArrowUpRight size={24} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
