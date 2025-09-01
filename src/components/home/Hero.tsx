import { PlayCircle } from "../shared/Icons";
import HeroCreditCards from "./HeroCreditCards";

export default function Hero() {
  return (
    <div className="bg-brand pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  overflow-hidden">
        <div className="p-4 sm:p-10">
          <p className="text-[#E9D7FE] text-center">Super. Simple. Banking.</p>
          <p className="text-4xl sm:text-5xl lg:text-7xl text-white font-extrabold  max-w-3xl mx-auto my-8 ">
            Banking technology that has your back.
          </p>
          <p className="text-[#E9D7FE] text-center mx-auto  max-w-3xl">
            Simple, transparent banking. No hidden fees and free overdrafts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center my-8">
            <button className="w-full sm:w-max bg-white py-4 px-6 rounded-xl text-center text-[#344054] flex gap-2 justify-center cursor-pointer">
              <PlayCircle /> Demo
            </button>
            <button className="w-full sm:w-max bg-primary py-4 px-6 rounded-xl text-center text-white cursor-pointer">
              Sign up
            </button>
          </div>
          <HeroCreditCards />
        </div>
      </div>
    </div>
  );
}
