export const user = {
  name: "Julio Cesar",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  email: "julio@example.com",
};

export const transactions = [
  {
    id: 1,
    date: "2024-06-01",
    description: "Salário",
    category: "Salário",
    type: "income",
    amount: 5000,
  },
  {
    id: 2,
    date: "2024-06-02",
    description: "Supermercado",
    category: "Alimentação",
    type: "expense",
    amount: 350,
  },
  {
    id: 3,
    date: "2024-06-03",
    description: "Aluguel",
    category: "Moradia",
    type: "expense",
    amount: 1800,
  },
  {
    id: 4,
    date: "2024-06-04",
    description: "Freelance",
    category: "Freelance",
    type: "income",
    amount: 1200,
  },
  {
    id: 5,
    date: "2024-06-05",
    description: "Restaurante",
    category: "Alimentação",
    type: "expense",
    amount: 120,
  },
  {
    id: 6,
    date: "2024-06-06",
    description: "Transporte",
    category: "Transporte",
    type: "expense",
    amount: 80,
  },
];

export const categories = [
  { name: "Salário", type: "income", color: "#22c55e" },
  { name: "Freelance", type: "income", color: "#16a34a" },
  { name: "Alimentação", type: "expense", color: "#f59e42" },
  { name: "Moradia", type: "expense", color: "#f43f5e" },
  { name: "Transporte", type: "expense", color: "#3b82f6" },
];

export const goals = [
  {
    id: 1,
    name: "Reserva de Emergência",
    target: 10000,
    current: 3200,
    deadline: "2024-12-31",
  },
  {
    id: 2,
    name: "Viagem Europa",
    target: 7000,
    current: 2500,
    deadline: "2025-06-01",
  },
];
