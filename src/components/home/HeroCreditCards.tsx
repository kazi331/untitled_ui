import { cards, type Card } from "@/lib/dummy";

export default function HeroCreditCards() {
  return (
    <div className="relative w-full h-64 flex items-end justify-center">
      <div className="relative w-full h-full flex items-end justify-center">
        {cards.map((card, index) => {
          // Calculate rotation and positioning for fanned effect
          const baseRotation = -20; // Start from left
          const rotationStep = 10; // Degrees between each card
          const rotation = baseRotation + index * rotationStep;

          // Calculate z-index for layering
          const zIndex = cards.length - index;

          // Calculate horizontal offset for fanned positioning
          const horizontalOffset = (index - 2) * 8; // Center card at index 2

          // Determine card visibility and styling based on position
          let cardClasses = "";
          let contentClasses = "";

          if (card.visible === "partial-left") {
            cardClasses = "w-64 h-40 -translate-x-16";
            contentClasses = "opacity-60";
          } else if (card.visible === "partial-right") {
            cardClasses = "w-64 h-40 translate-x-16";
            contentClasses = "opacity-60";
          } else if (card.visible === "center") {
            cardClasses = "w-72 h-44";
            contentClasses = "opacity-100";
          } else {
            cardClasses = "w-68 h-42";
            contentClasses = "opacity-80";
          }

          return (
            <div
              key={card.id}
              className={`absolute bottom-0 ${cardClasses} transform transition-all duration-300 ease-out`}
              style={{
                transform: `rotate(${rotation}deg) translateX(${horizontalOffset}px)`,
                zIndex: zIndex,
                transformOrigin: "bottom center",
              }}
            >
              {/* Credit Card */}
              <CreditCard card={card} contentClasses={contentClasses} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const CreditCard = ({
  card,
  contentClasses,
}: {
  card: Card;
  contentClasses: string;
}) => {
  return (
    <div
      className={`w-96 h-48 rounded-2xl bg-gradient-to-br from-[#A68FC0]/60 via-[#8883B7]/60 to-[#A297C1]/60 backdrop-blur-xs border-2 border-white/70 shadow `}
    >
      <div className="p-6 w-2/3 flex flex-col justify-between h-full">
        <p className="text-white font-semibold text-2xl tracking-wider">
          Untitled.
        </p>
        <div>
          <div className="flex items-center justify-between text-white font-medium text-lg tracking-wide ">
            <p>{card.name}</p>
            <p>{card.expiry}</p>
          </div>
          <p className="text-white font-mono text-xl tracking-wider">
            {card.cardNumber}
          </p>
        </div>
      </div>
    </div>
  );
};
