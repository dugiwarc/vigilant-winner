export const TODO_LIST_ADDRESS = "0x766DcBA0A4863bcE023118Dc0f88BE048A73574F";

export const TODO_LIST_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_content",
        type: "string"
      }
    ],
    name: "addTransaction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "content",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
