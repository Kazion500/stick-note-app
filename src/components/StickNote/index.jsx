import { useState, useRef, useEffect, forwardRef } from "react";
import { deleteNote, saveNote, updateNote } from "../../utils";

export default forwardRef(({ text, id }, ref) => {
  const [value, setValue] = useState("");
  const [editable, setEditable] = useState("");
  const [noteId, setNoteId] = useState("");

  const handleChangeToInput = (e) => {
    const nId = e.target.dataset.noteId;
    setNoteId(nId);
    setEditable(true);
  };

  const handleDbClick = () => {
    deleteNote(noteId);
  };

  return (
    <div
      onKeyDown={(e) => {
        setValue(e.target.innerText);
      }}
      onKeyPress={(e) => {
        if (e.which === 13) {
          const payload = {
            text: value,
            id: Math.floor(Math.random() * 100000),
          };
          if (noteId) {
            updateNote({ ...payload, id: noteId });
          } else {
            saveNote(payload);
          }
          setEditable(false);
        }
      }}
      onDoubleClick={handleDbClick}
      onClick={handleChangeToInput}
      contentEditable={editable}
      suppressContentEditableWarning={true}
      ref={ref}
      data-note-id={id}
      placeholder="Add a note"
      className={`p-3 shadow-lg rounded-md w-full min-h-[100px] stickNote bg-white`}
    >
      {text}
    </div>
  );
});
