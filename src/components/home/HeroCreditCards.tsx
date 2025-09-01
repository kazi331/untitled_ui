import { cards, type Card } from "@/lib/dummy";

export default function HeroCreditCards() {
  return (
    <div>
      <div className="flex justify-center relative -mb-48 h-[30rem]">
        <div>
          {cards.map((card: Card, i: number) => {
            return (
              <div
                className="absolute bottom-0 left-0 translate-1/2 "
                key={card.id}
                style={{
                  transform: `rotate(${(i + 1) * 30}deg)`,
                  transformOrigin: "430px 100px",
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
      className={`w-max min-w-xs h-48 rounded-3xl bg-gradient-to-br from-[#A68FC0]/80 via-[#8883B7]/80 to-[#A297C1]/80 backdrop-blur border-2 border-white/70 shadow font-manrope text-white `}
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
