import * as React from "react";
import { Note } from "./Interface";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface INotesListProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <>
      <Card
        style={{ width: "18rem", margin: "1rem", backgroundColor: "#EEEEEE" }}
      >
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{note.title}</Card.Title>

          <Card.Text>{note.text}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(note.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default NotesList;
