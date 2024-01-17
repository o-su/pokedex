export type PokemonsApiData = {
  query: PokemonsApiQueryData;
};

export type PokemonsApiQueryData = {
  limit: number;
  offset: number;
  search: string;
  filter: PokemonsApiQueryFilterData;
};

export type PokemonsApiQueryFilterData = {
  type: string;
  isFavorite: boolean;
};

export type PokemonConnection = {
  limit: number;
  offset: number;
  count: number;
  edges: Pokemon[];
};

export type PokemonEvolution = {
  id: string;
};

export type Pokemon = {
  id: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: string[];
  resistant: string[];
  attacks: PokemonAttack;
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  evolutions: Pokemon[];
  evolutionRequirements: PokemonEvolutionRequirement;
  maxHP: number;
  image: string;
  sound: string;
  isFavorite: boolean;
};

export type PokemonDimension = {
  minimum: string;
  maximum: string;
};

export type PokemonAttack = {
  fast: Attack[];
  special: Attack[];
};

type Attack = {
  name: string;
  type: string;
  damage: number;
};

type PokemonEvolutionRequirement = {
  amount: number;
  name: string;
};
