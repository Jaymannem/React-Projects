export interface ITable {
  id: number;
  name: string;
  email: string;
  city: string;
}

export const data: ITable[] = [
  { id: 1, name: "Jaya", email: "jaya@example.com", city: "Hyderabad" },
  { id: 2, name: "Arun", email: "arun@example.com", city: "Chennai" },
  { id: 3, name: "Meena", email: "meena@example.com", city: "Bangalore" },
  { id: 4, name: "Kiran", email: "kiran@example.com", city: "Delhi" },
  { id: 5, name: "Priya", email: "priya@example.com", city: "Mumbai" },
];
