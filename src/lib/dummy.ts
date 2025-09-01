export interface Card {
  id: number;
  name: string;
  cardNumber: string;
  expiry: string;
  visible: string;
}

export const cards: Card[] = [
  {
    id: 1,
    name: "PHOEBE",
    cardNumber: "1234 1234 1234 1234",
    expiry: "06/24",
    visible: "partial-left",
  },
  {
    id: 2,
    name: "OLIVIA RHYE",
    cardNumber: "1234 1234 1234 123",
    expiry: "06/24",
    visible: "full",
  },
  {
    id: 3,
    name: "LANA STEINER",
    cardNumber: "1234 1234 1234 1234",
    expiry: "06/24",
    visible: "center",
  },
  {
    id: 4,
    name: "DEMI WILKINSON",
    cardNumber: "1234 1234 1234 1234",
    expiry: "06/24",
    visible: "full",
  },
  {
    id: 5,
    name: "CANDICE WU",
    cardNumber: "1234 1234 1234 1234",
    expiry: "06/24",
    visible: "partial-right",
  },
];
