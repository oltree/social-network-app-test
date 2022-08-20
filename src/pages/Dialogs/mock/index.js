import { v4 as uuid } from "uuid";

export const mockUsers = [
  {
    name: "Oleg",
    id: "#1",
  },
  {
    name: "Dasha",
    id: "#2",
  },
  {
    name: "Ivan",
    id: "#3",
  },
  {
    name: "Sveta",
    id: "#4",
  },
];

export const mockMessages = [
  {
    message: "Hello!",
    id: uuid(),
  },
  {
    message: "How are you?",
    id: uuid(),
  },
];
