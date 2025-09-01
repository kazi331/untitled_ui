export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
        <div className="p-10 sm:py-20 md:py-10 bg-brand flex flex-col justify-center w-full md:w-3/5">
          <p className="text-xl sm:text-3xl text-white">Give us a shot</p>
          <p className="text-[#E9D7FE] text-sm font-light my-6">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 my-4">
            <button className="bg-white py-3 px-6 rounded-lg text-center text-[#344054] flex gap-2 cursor-pointer">
              Learn More
            </button>
            <button className="bg-primary py-3 px-6 rounded-lg text-center text-white cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <img src="/cta.jpg" alt="" className="object-cover w-full md:w-2/5 max-h-72" />
      </div>
    </div>
  );
}
