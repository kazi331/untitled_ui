export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="flex rounded-2xl overflow-hidden bg-rose-500">
        <div className="p-10 bg-brand flex flex-col justify-center w-3/5">
          <p className="text-3xl text-white">Give us a shot</p>
          <p className="text-[#E9D7FE] text-sm font-light my-6">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex gap-4 my-4">
            <button className="bg-white py-3 px-6 rounded-lg text-center text-[#344054] flex gap-2 cursor-pointer">
              Learn More
            </button>
            <button className="bg-primary py-3 px-6 rounded-lg text-center text-white cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-2/5">
          <img src="/cta.jpg" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
