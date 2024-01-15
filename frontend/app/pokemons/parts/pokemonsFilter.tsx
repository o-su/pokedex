import { ContentSwitcher } from "@/app/common/components/contentSwitcher";
import {
  CatalogIcon,
  FavoriteFilledIcon,
  GridIcon,
  ListIcon,
} from "@/app/common/components/icon";
import { IconSwitch } from "@/app/common/components/iconSwitch";
import { Padding } from "@/app/common/components/layout/padding";
import { SearchInput } from "@/app/common/components/searchInput";
import { Select } from "@/app/common/components/select";
import { Switch } from "@/app/common/components/switch";
import { Layout } from "@/app/common/types/layoutTypes";
import { PokemonCategory } from "../pokemonsTypes";

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
        onChange={(newCategory) => changeCategory(newCategory.name)}
      >
        <Switch
          name={PokemonCategory.All}
          selected={selectedCategory === PokemonCategory.All}
        >
          <CatalogIcon /> All
        </Switch>
        <Switch
          name={PokemonCategory.Favorite}
          selected={selectedCategory === PokemonCategory.Favorite}
        >
          <FavoriteFilledIcon /> Favorites
        </Switch>
      </ContentSwitcher>

      <div style={{ display: "flex", marginTop: 5 }}>
        {pokemonTypes && (
          <Select
            id="pokemon-type"
            items={pokemonTypes}
            placeholder="Select Type"
            value={pokemonType}
            allowCustomValue={false}
            selectedItem={pokemonType}
            onChange={({ selectedItem }: any) => setPokemonType(selectedItem)}
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
            onChange={(newLayout) => changeLayout(newLayout.name)}
          >
            <IconSwitch
              name={Layout.Grid}
              selected={layout === Layout.Grid}
              text="Grid"
            >
              <GridIcon />
            </IconSwitch>
            <IconSwitch
              name={Layout.List}
              selected={layout === Layout.List}
              text="List"
            >
              <ListIcon />
            </IconSwitch>
          </ContentSwitcher>
        </div>
      </div>
    </Padding>
  );
}
