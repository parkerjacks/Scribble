import React, { useEffect, useState } from "react"
import Note from "./Note"
import NoteEditor from "./NoteEditor"

export default function NoteArea() {
    let existingStorage = JSON.parse(localStorage.getItem('myNotes'))
    let [myNotes, setMyNotes] = useState(existingStorage ? existingStorage : [])
    let [isEditor, setIsEditor] = useState(false)

    function editNote() {
        setIsEditor(true)
    }

    console.log(existingStorage)
    return (
        <div className="note_area">

            <button className="add_note_button" onClick={editNote}> + </button>
            {myNotes.map((n, index) => {
                console.log(n)
                return <Note key={index} info={n} />
            })}

            {isEditor && <NoteEditor setIsEditor={setIsEditor} setMyNotes={setMyNotes} />}
        </div>
    )
}