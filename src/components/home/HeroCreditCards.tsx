import { cards, type Card } from "@/lib/dummy";

export default function HeroCreditCards() {
  return (
    <div className="-mb-76 mt-40">
      <div className="flex justify-center relative h-[30rem] ">
        {cards.map((card: Card, i: number) => {
          return (
            <div
              className=""
              key={card.id}
              style={{
                transform: `rotate(${(i + 1) * 30}deg)`,
                transformOrigin: "10px 400px",
              }}
            >
              <CreditCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const CreditCard = ({ card }: { card: Card }) => {
  return (
    <div
      className={`w-max min-w-xs absolute bottom-0 right-0 -translate-x-1/2  h-48 rounded-3xl bg-gradient-to-br from-[#A68FC0]/80 via-[#8883B7]/80 to-[#A297C1]/80 backdrop-blur border-2 border-white/70 shadow font-manrope text-white `}
    >
      <div className="p-6 w-2/3 flex flex-col justify-between h-full">
        <p className="font-semibold text-xl tracking-wider">Untitled.</p>
        <div>
          <div className="w-max flex gap-10 items-center justify-between font-medium tracking-wide ">
            <p>{card.name}</p>
            <p>{card.expiry}</p>
          </div>
          <p className="w-max tracking-wider">{card.cardNumber}</p>
        </div>
      </div>
    </div>
  );
};
