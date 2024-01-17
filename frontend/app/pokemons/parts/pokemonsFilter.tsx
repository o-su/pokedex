import { ContentSwitcher } from "@/app/common/components/contentSwitcher";
import {
  CatalogIcon,
  FavoriteFilledIcon,
  GridIcon,
  ListIcon,
} from "@/app/common/components/icon";
import { Padding } from "@/app/common/components/layout/padding";
import { SearchInput } from "@/app/common/components/searchInput";
import { Select } from "@/app/common/components/select";
import { Switch } from "@/app/common/components/switch";
import { Layout } from "@/app/common/types/layoutTypes";
import { PokemonCategory } from "../pokemonsTypes";

export const defaultPokemonType = "All";

export type PokemonsFilterProps = {
  selectedCategory: PokemonCategory;
  pokemonTypes: string[] | undefined;
  pokemonType: string;
  search: string;
  layout: Layout;
  changeCategory: (category: PokemonCategory) => void;
  setPokemonType: (type: string) => void;
  setSearch: (search: string) => void;
  changeLayout: (layout: Layout) => void;
};

export function PokemonsFilter({
  selectedCategory,
  pokemonTypes,
  pokemonType,
  search,
  layout,
  changeCategory,
  setPokemonType,
  setSearch,
  changeLayout,
}: PokemonsFilterProps): JSX.Element {
  return (
    <Padding top={5}>
      <ContentSwitcher
        size="md"
        selectedIndex={0}
        onChange={(newCategory) =>
          changeCategory(newCategory.name as PokemonCategory)
        }
      >
        <Switch
          name={PokemonCategory.All}
          selected={selectedCategory === PokemonCategory.All}
        >
          <CatalogIcon style={{ float: "left", marginRight: 5 }} /> All
        </Switch>
        <Switch
          name={PokemonCategory.Favorite}
          selected={selectedCategory === PokemonCategory.Favorite}
        >
          <FavoriteFilledIcon style={{ float: "left", marginRight: 5 }} />{" "}
          Favorites
        </Switch>
      </ContentSwitcher>

      <div style={{ display: "flex", marginTop: 5 }}>
        {pokemonTypes && (
          <Select
            id="pokemon-type"
            placeholder="Select Type"
            allowCustomValue={false}
            items={[defaultPokemonType, ...pokemonTypes]}
            initialSelectedItem={defaultPokemonType}
            selectedItem={pokemonType}
            onChange={({ selectedItem }) =>
              selectedItem && setPokemonType(selectedItem)
            }
          />
        )}

        <SearchInput
          placeholder="Search"
          labelText="Search"
          closeButtonLabelText="Clear search input"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div>
          <ContentSwitcher
            size="md"
            selectedIndex={0}
            onChange={(newLayout) => changeLayout(newLayout.name as Layout)}
          >
            <Switch name={Layout.Grid} selected={layout === Layout.Grid}>
              <GridIcon style={{ float: "left" }} />
            </Switch>
            <Switch name={Layout.List} selected={layout === Layout.List}>
              <ListIcon style={{ float: "left" }} />
            </Switch>
          </ContentSwitcher>
        </div>
      </div>
    </Padding>
  );
}
