import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Notes from "./Notes";
import { Note } from "./Interface";
import CreateNotes from "./CreateNotes";

function App() {
  // Load notes from local storage or use a default value if no data is found
  const [notes, setNotes] = useState<Note[]>(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes
      ? JSON.parse(storedNotes)
      : [
          {
            id: new Date().toString(),
            title: "Meeting",
            text: "Tomorrow 9 am",
            date: new Date().toString(),
          },
        ];
  });

  // Update local storage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Notes notes={notes} setNotes={setNotes} />
      <CreateNotes notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
