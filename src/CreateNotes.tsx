import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Note } from "./Interface";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = React.useState("");

  const titleRef = React.useRef<HTMLInputElement>(null);
  const textRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      (titleRef.current as HTMLInputElement).value === "" ||
      (textRef.current as HTMLTextAreaElement).value === ""
    ) {
      setError("All fields are required");
    } else {
      setError("");

      setNotes([
        ...notes,
        {
          id: new Date().toString(),
          title: (titleRef.current as HTMLInputElement).value,
          text: (textRef.current as HTMLTextAreaElement).value,
          date: new Date().toString(),
        },
      ]);
      (textRef.current as HTMLTextAreaElement).value = "";
      (titleRef.current as HTMLInputElement).value = "";
    }
  };

  return (
    <>
      {error && (
        <p style={{ fontSize: "20px", color: "red", margin: "10px" }}>
          {error}
        </p>
      )}
      <Form className="m-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="input"
            placeholder="Your title"
            style={{ width: "40rem" }}
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Your notes"
            style={{ width: "40rem", height: "5rem", resize: "none" }}
            ref={textRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Notes
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
