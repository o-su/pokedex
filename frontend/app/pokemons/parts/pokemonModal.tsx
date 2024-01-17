import { Route } from "@/app/common/constants/routeConstants";
import { Modal } from "@carbon/react";
import { useRouter } from "next/navigation";

import { PokemonPreview } from "./pokemonPreview";

export type PokemonModalProps = {
  pokemonName: string;
  opened: boolean;
  onClose: () => void;
};

export function PokemonModal({
  pokemonName,
  opened,
  onClose,
}: PokemonModalProps): JSX.Element {
  const router = useRouter();

  return (
    <Modal
      modalHeading={pokemonName}
      open={opened}
      primaryButtonText="Full Detail"
      onRequestSubmit={() => router.push(Route.Pokemon + pokemonName)}
      onRequestClose={onClose}
    >
      <PokemonPreview pokemonName={pokemonName} />
    </Modal>
  );
}
