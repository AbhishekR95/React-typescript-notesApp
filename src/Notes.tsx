import * as React from "react";
import { Note } from "./Interface";
import NotesList from "./NotesList";

interface INotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Notes: React.FunctionComponent<INotesProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((item) => item.id !== id));
  };
  const renderNotes = () => {
    return notes.map((note) => <NotesList key={note.id} note={note} handleDelete={handleDelete}/>);
  };
  return (
    <>
      <div>{renderNotes()}</div>
    </>
  );
};

export default Notes;
