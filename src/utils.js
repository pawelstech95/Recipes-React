export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const data = [
  // temporary data
  {
    id: 1,
    title: 'Pomidorowa',
    ingredients: 'Skldniki',
    description: 'Opis',
  },
  {
    id: 2,
    title: 'Rosół',
    ingredients: 'Skldniki2',
    description: 'Opis',
  },
  {
    id: 3,
    title: 'Ogórkowa',
    ingredients: 'Skldniki3',
    description: 'Opis',
  },
];
