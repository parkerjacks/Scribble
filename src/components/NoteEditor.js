import React from "react"
import { v4 as uuidv4 } from 'uuid';
export default function NoteEditor({ setIsEditor, setMyNotes }) {

    function saveNote(e) {
        e.preventDefault()
        let editor = document.querySelector('.note_editor')
        let title = editor.querySelector('.note_title').value
        let details = editor.querySelector(".note_details").value
        let storage = JSON.parse(localStorage.getItem('myNotes')) ? JSON.parse(localStorage.getItem('myNotes')) : []
        let noteObj = {
            index: uuidv4(),
            title,
            details
        }
        let updatedStorage = [...storage]
        updatedStorage.push(noteObj)
        localStorage.setItem('myNotes', JSON.stringify(updatedStorage))
        setIsEditor(false)
        setMyNotes(JSON.parse(localStorage.getItem('myNotes')))
    }


    return (
        <form className="note_editor">
            <input className="note_title" placeholder="Note Title" />
            <textarea className="note_details" placeholder="Type Your Details" />
            <div className="editor_buttons">
                <button type="submit" onClick={saveNote}> Save </button>
                <button onClick={() => { setIsEditor(false) }}> Cancel </button>
                <button> Delete </button>
            </div>
        </form>

    )
}