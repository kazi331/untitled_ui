import {
  Boltshift,
  FeatherDev,
  GlobalBank,
  LightBox,
  Nietzsche,
  Spherule,
} from "@/components/shared/Icons";

interface Company {
  name: string;
  icon: React.FC<{ className?: string }>;
}
const companies: Company[] = [
  { name: "Boltshift", icon: Boltshift },
  { name: "Lightbox", icon: LightBox },
  { name: "FeatherDev", icon: FeatherDev },
  { name: "Global Bank", icon: GlobalBank },
  { name: "Nietzsche", icon: Nietzsche },
  { name: "Spherule", icon: Spherule },
];

export default function Companies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <p className="text-sm text-[#475467] text-center mb-10">
        Join 4,000+ companies already growing
      </p>
      {/* <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"> */}
      <div className="flex gap-4 flex-wrap items-center justify-center">
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
