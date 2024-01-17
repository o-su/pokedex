import postgres, { Sql } from "postgres";

export class Favorites {
  private sql: Sql;

  constructor() {
    // db config should be stored in env file for security reasons
    this.sql = postgres({
      host: "localhost",
      port: 5432,
      database: "pokemons_db",
      username: "user",
      password: "password",
    });

    this.init();
  }

  init = async () => {
    await this.sql`
    CREATE TABLE IF NOT EXISTS "favorites" (
        "id" VARCHAR(40) NOT NULL,
	    "favorite" BOOLEAN NOT NULL,
	    PRIMARY KEY ("id")
    );
    `;
  };

  getFavoritePokemons = async (): Promise<string[]> => {
    const data = await this.sql`SELECT id FROM favorites WHERE favorite=TRUE`;

    return data.map((row) => row.id);
  };

  markPokemonAsFavorite = async (pokemonId: string) => {
    await this.sql`
        insert into favorites ("id", "favorite") values (${pokemonId}, TRUE)
        ON CONFLICT (id) DO UPDATE SET favorite = TRUE
    `;
  };

  unmarkPokemonAsFavorite = async (pokemonId: string) => {
    await this.sql`
        insert into favorites ("id", "favorite") values (${pokemonId}, TRUE)
        ON CONFLICT (id) DO UPDATE SET favorite = FALSE
    `;
  };
}
