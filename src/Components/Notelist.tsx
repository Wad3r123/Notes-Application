import React from "react";

interface Props {
   note: string
   completeNote(NoteToDelete: string): void
 
}

const Notelist  = ({ note, completeNote,}: Props) => {
    return ( 
    <div className="note">
        <div className="content">
        <span>{note}</span>
        </div>
        <button
            onClick={() => {
                completeNote(note);
            }}
        >
          X
        </button>
    </div>
    );
};

export default Notelist;