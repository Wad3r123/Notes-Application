import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import Notelist from './Components/Notelist';



const App: FC = () => {

  const [note, setNote] = useState<string>("")
  const [notes, setNotes] = useState<string[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "note") {
      setNote(event.target.value)
    } 
  };

  const addNote = (): void => {
    setNotes([...notes, note]);
    setNote("");
  };
   
 
 const completeNote = (NoteToDelete: string): void => {
    setNotes(
      notes.filter((note) => {
        return note != NoteToDelete;
      })
    );
  };
  
  window.localStorage.setItem("Notes", JSON.stringify(notes));

  return (
    <div className="App"> 
    <div className="header">
      <div 
      className="input container">
      </div>
      <input type="text" placeholder="Note" value={note} name="note" onChange={handleChange}/>
      <button onClick={addNote}>Add Note</button>
    </div>
    <div className="notes">
      {notes.map((note:string) => {
        return <Notelist completeNote={completeNote} note={note}/>;
      })}
    </div>
    </div> 
  );
}

export default App;


