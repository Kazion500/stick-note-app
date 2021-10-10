import { createRef, useEffect, useState } from "react";
import StickNote from "./components/StickNote";
import StickNoteAdd from "./components/StickNoteAdd";
import { getAllNotes } from "./utils";

function App() {
  const [lines, setLines] = useState([0]);
  const ref = createRef();

  useEffect(() => {
    ref.current.style.display = "none";
  }, []);

  return (
    <div className="py-10 bg-indigo-500">
      <h3 className="text-center text-5xl text-white font-bold">
        Stick Note App
      </h3>
      <div className="h-screen overflow-y-scroll mx-10 sm:mx-20 lg:mx-40  xl:mx-52  gap-4 py-10 auto-rows-min place-items-start grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
        {getAllNotes()?.map((note) => (
          <StickNote key={note.id} {...note} ref={ref} />
        ))}
        {lines.map((m) => (
          <StickNote key={m} ref={ref} />
        ))}
        <StickNoteAdd pstate={{ lines, setLines }} />
      </div>
    </div>
  );
}

export default App;
