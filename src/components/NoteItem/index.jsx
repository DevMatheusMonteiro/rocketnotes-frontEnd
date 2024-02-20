import { FiPlus, FiX } from "react-icons/fi";

import { ContainerNoteItem } from "./styles";

export default function NoteItem({ isnew = false, onClick, value, ...rest }) {
  return (
    <ContainerNoteItem $isnew={isnew}>
      <input type="text" value={value} readOnly={!isnew} {...rest} />
      <button type="button" onClick={onClick}>
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </ContainerNoteItem>
  );
}
