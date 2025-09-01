import { cards, type Card } from "@/lib/dummy";

export default function HeroCreditCards() {
  return (
    <div className="h-[]">
      <div className="flex justify-center relative -my-10">
        <div>
          {cards.map((card: Card, i: number) => {
            return (
              <div
                className="absolute top-0 left-0 "
                key={card.id}
                style={{
                  transform: `rotate(${(i + 1) * 30}deg)`,
                  // transformOrigin: "bottom right",
                  transformOrigin: "420px 100px",
                }}
              >
                <CreditCard card={cards[3]} />
              </div>
            );
          })}
        </div>
        {/* <CreditCard card={cards[3]} /> */}
      </div>
    </div>
  );
}

export const CreditCard = ({ card }: { card: Card }) => {
  return (
    <div
      className={`w-max h-48 rounded-2xl bg-gradient-to-br from-[#A68FC0]/60 via-[#8883B7]/60 to-[#A297C1]/60 backdrop-blur-xs border-2 border-white/70 shadow `}
    >
      <div className="p-6 w-2/3 flex flex-col justify-between h-full">
        <p className="text-white font-semibold text-2xl tracking-wider">
          Untitled.
        </p>
        <div>
          <div className="w-max flex gap-20 items-center justify-between text-white font-medium text-lg tracking-wide ">
            <p>{card.name}</p>
            <p>{card.expiry}</p>
          </div>
          <p className="w-max text-white font-mono text-xl tracking-wider">
            {card.cardNumber}
          </p>
        </div>
      </div>
    </div>
  );
};
