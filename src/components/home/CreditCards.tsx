import { cards, type Card } from "@/lib/dummy";

export default function CreditCards() {
  return (
    <div className="flex justify-center h-[38rem] -mb-64 ">
      {cards.map((card: Card, i: number) => (<CreditCard card={card} i={i} key={card.id} />))}
    </div>
  );
}

export const CreditCard = ({ card, i }: { card: Card, i: number }) => {
  return (

    <div key={card.id} className="relative">
      <div
        style={{
          transform: `rotate(${(i + 1) * 30}deg)`,
          transformOrigin: "150% 50%",
        }}
        className={`w-max min-w-xs h-48 absolute bottom-0 right-0 -translate-x-1/2 rounded-3xl bg-gradient-to-br from-[#A68FC0]/80 via-[#8883B7]/80 to-[#A297C1]/80 backdrop-blur border-2 border-white/70 shadow font-manrope text-white `}
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
