import { cards, type Card } from "@/lib/dummy";

export default function CreditCards() {
  return (
    <div className="flex justify-center h-[32rem] md:h-[35rem] -mb-44 md:-mb-60 ">
      {cards.map((card: Card, i: number) => (<CreditCard card={card} i={i} key={card.id} />))}
    </div>
  );
}

export const CreditCard = ({ card, i }: { card: Card, i: number }) => {
  return (

    <div key={card.id} className="relative ">
      <div
        style={{
          transform: `rotate(${(i + 1) * 30}deg)`,
          // transformOrigin: "150% 50%",
        }}
        className={`origin-[120%_60%] md:origin-[130%_50%] w-max min-w-xs h-48 absolute bottom-0 right-0 -translate-x-1/5 md:-translate-x-1/4 rounded-3xl bg-gradient-to-br from-[#A68FC0]/80 via-[#8883B7]/80 to-[#A297C1]/80 backdrop-blur-sm border-2 border-white/70 shadow font-manrope text-white hover:-translate-y-10 hover:rotate-0 transition hover:z-[5] `}
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
    </div>
  );
};
