import { ApolloServer } from "apollo-server-express";
import express from "express";
import fs from "fs";
import _ from "lodash";

import { Favorites } from "./favorites";
import pokemonsData from "./pokemons.json";
import { Pokemon, PokemonAttack, PokemonsApiData } from "./types";
import { filterPokemons, prepareEvolutions, resolveImageUrl } from "./utils";

const PORT = 4000;
const BASE_URL = `http://localhost:${PORT}`;
const typeDefs = fs.readFileSync(`${__dirname}/schema.graphql`, "utf-8");
const app = express();
const favorites = new Favorites();

app.get("/sounds/:id", (req, res) =>
  res.sendFile(`${__dirname}/sounds/${req.params.id}.mp3`)
);

const resolvers = {
  Query: {
    pokemons: async (__, args: PokemonsApiData) =>
      filterPokemons(args.query, favorites, pokemonsData),
    pokemonById: (_, args) =>
      pokemonsData.find((pokemon) => pokemon.id === args.id),
    pokemonByName: (_, args) =>
      pokemonsData.find(
        (pokemon) => pokemon.name.toLowerCase() === args.name.toLowerCase()
      ),
    pokemonTypes: () =>
      _.uniq(_.flatMap(pokemonsData, (pokemon) => pokemon.types)),
  },
  Mutation: {
    favoritePokemon: async (_, args) => {
      const pokemon = pokemonsData.find((pokemon) => pokemon.id === args.id);

      if (!pokemon) {
        throw Error("Pokemon not found");
      }

      await favorites.markPokemonAsFavorite(args.id);

      return pokemon;
    },
    unFavoritePokemon: async (_, args) => {
      const pokemon = pokemonsData.find((pokemon) => pokemon.id === args.id);

      if (!pokemon) {
        throw Error("Pokemon not found");
      }

      await favorites.unmarkPokemonAsFavorite(args.id);

      return pokemon;
    },
  },
  Pokemon: {
    number: (pokemon: Pokemon) => parseInt(pokemon.id, 10),
    image: (pokemon: Pokemon) => resolveImageUrl(pokemon.name),
    sound: (pokemon: Pokemon) =>
      `${BASE_URL}/sounds/${parseInt(pokemon.id, 10)}`,
    evolutions: (pokemon: Pokemon) => prepareEvolutions(pokemon.evolutions),
    isFavorite: async (pokemon: Pokemon) => {
      const favoritePokemons = await favorites.getFavoritePokemons();

      return favoritePokemons.includes(pokemon.id);
    },
  },
  PokemonAttack: {
    fast: (pokemonAttack: PokemonAttack) => pokemonAttack.fast || [],
    special: (pokemonAttack: PokemonAttack) => pokemonAttack.special || [],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(
    `🚀  Pokemon GraphQL server running at ${BASE_URL}${server.graphqlPath}`
  );
});
