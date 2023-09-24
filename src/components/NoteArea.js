import React, { useEffect, useState } from "react"
import Note from "./Note"
import NoteEditor from "./NoteEditor"

export default function NoteArea() {
    let existingStorage = JSON.parse(localStorage.getItem('myNotes'))
    let [myNotes, setMyNotes] = useState(existingStorage ? existingStorage : [])
    let [isEditor, setIsEditor] = useState(null)

    function createNewNote() {
        let noteObj = {
            index: "new",
            title: "",
            details: ""
        }
        setIsEditor(noteObj)
    }

    function editExistingNote(e) {
        let noteInfo = JSON.parse(localStorage.getItem('myNotes'))
        let currentNote = noteInfo.find(obj => obj.index === e.target.dataset.uniqueid)
        setIsEditor(currentNote)
    }

    return (
        <div className="note_area">

            <button className="add_note_button" onClick={createNewNote}> + </button>
            {myNotes.map((n, index) => {
                return <Note editExistingNote={editExistingNote} setIsEditor={setIsEditor} key={index} info={n} />
            })}

            {isEditor && <NoteEditor isEditor={isEditor} setIsEditor={setIsEditor} setMyNotes={setMyNotes} />}
        </div>
    )
}