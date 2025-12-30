import AddNote from "../components/AddNote";
import NotesCard from "../components/NotesCard";
import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

type Note = {
  id: number;
  body: string;
};

const NotesPage = () => {
    const context = useContext(NoteContext);
    if (!context) {
      throw new Error("AddNote must be used within a NoteProvider");
    }
  
    const { notes, setNotes } = context;
  
  return (
    <section className="bg-gray-200 relative h-full px-5 md:px-10 pt-5 md:pt-10">
      <div className="flex gap-10 flex-wrap">
        {notes.map((item: Note, i) => (
          <NotesCard key={i} item={item} />
        ))}
      </div>
      <AddNote/>
    </section>
  );
};

export default NotesPage;
