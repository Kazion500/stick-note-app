export const getAllNotes = () => {
  return JSON.parse(localStorage.getItem("notes"));
};

export const saveNote = (data) => {
  const exists = getAllNotes();
  if (!exists) {
    localStorage.setItem("notes", JSON.stringify([data]));
  } else {
    exists.push(data);
    localStorage.setItem("notes", JSON.stringify([...exists]));
  }
};

export const updateNote = (data) => {
  const notes = getAllNotes();
  let note = notes.filter((note) => note.id == data.id)[0];
  note.text = data.text;
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const deleteNote = (id) => {
  const notes = getAllNotes();
  let note = notes.filter((note) => note.id != id);
  localStorage.setItem("notes", JSON.stringify(note));
  location.reload()
};
