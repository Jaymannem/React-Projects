import { Country } from "./LocationTypes";

export const Locations: Country[] = [
  {
    id: 1,
    name: "India",
    states: [
      {
        id: 101,
        name: "Andhra Pradesh",
        cities: [
          { id: 102, name: "Kadapa" },
          { id: 103, name: "Vijayawada" },
          { id: 104, name: "Vizag" },
        ],
      },
      {
        id: 201,
        name: "Telangana",
        cities: [
          { id: 202, name: "Warangal" },
          { id: 203, name: "Nalgonda" },
          { id: 204, name: "Khammam" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "USA",
    states: [
      {
        id: 301,
        name: "California",
        cities: [
          { id: 302, name: "Los Angeles" },
          { id: 303, name: "San Francisco" },
        ],
      },
      {
        id: 401,
        name: "Texas",
        cities: [
          { id: 402, name: "Dallas" },
          { id: 403, name: "Houston" },
        ],
      },
    ],
  },
];
