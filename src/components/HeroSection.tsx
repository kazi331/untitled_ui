import { PlayCircle } from "./shared/Icons";

export default function HeroSection() {
  return (
    <div className="bg-brand py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#E9D7FE]">Super. Simple. Banking.</p>
        <p className="text-7xl text-white font-extrabold max-w-3xl mx-auto my-8">
          Banking technology that has your back.
        </p>
        <p className="text-[#E9D7FE]">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>
        <div className="flex gap-4 justify-center my-8">
          <button className="bg-white py-4 px-6 rounded-xl text-center text-[#344054] flex gap-2 cursor-pointer">
            <PlayCircle /> Demo
          </button>
          <button className="bg-primary py-4 px-6 rounded-xl text-center text-white cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
