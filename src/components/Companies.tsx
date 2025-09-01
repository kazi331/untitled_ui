import {
  Boltshift,
  FeatherDev,
  GlobalBank,
  LightBox,
  Nietzsche,
  Spherule,
} from "./shared/Icons";

const companies: { name: string; icon: React.FC<{ className?: string }> }[] = [
  { name: "Boltshift", icon: Boltshift },
  {
    name: "Lightbox",
    icon: LightBox,
  },
  {
    name: "FeatherDev",
    icon: FeatherDev,
  },
  {
    name: "Global Bank",
    icon: GlobalBank,
  },
  {
    name: "Nietzsche",
    icon: Nietzsche,
  },
  {
    name: "Spherule",
    icon: Spherule,
  },
];

export default function Companies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <p className="text-sm text-[#475467] text-center mb-10">
        Join 4,000+ companies already growing
      </p>
      <div className="flex gap-5 items-center justify-center">
        {companies.map((company) => (
          <div key={company.name} className="flex gap-2 items-center">
            <company.icon />
            {company.name}
          </div>
        ))}
      </div>
    </div>
  );
}
