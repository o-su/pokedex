import { Modal } from "@carbon/react";
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
  return (
    <Modal
      modalHeading={pokemonName}
      passiveModal
      open={opened}
      onRequestClose={onClose}
    >
      <PokemonPreview pokemonName={pokemonName} />
    </Modal>
  );
}
