import React from "react"
import { v4 as uuidv4 } from 'uuid';
export default function NoteEditor({isEditor, setIsEditor, setMyNotes }) {

    let isDeleteButton = isEditor.index === "new" ? false : true

    function saveNote(e) {
        e.preventDefault()
        let editor = document.querySelector('.note_editor')
        let storage = JSON.parse(localStorage.getItem('myNotes')) ? JSON.parse(localStorage.getItem('myNotes')) : []
        let title = editor.querySelector('.note_title').value
        let details = editor.querySelector(".note_details").value
        let updatedStorage
        if (isEditor.index === "new") {
            let noteObj = {
                index: uuidv4(),
                title,
                details
            }
            updatedStorage = [...storage]
            updatedStorage.push(noteObj)
        }
        else {
            let currentNoteIndex = storage.findIndex(obj => obj.index === isEditor.index)
            updatedStorage = [...storage]
            updatedStorage[currentNoteIndex].details = details
            updatedStorage[currentNoteIndex].title = title
        }
        localStorage.setItem('myNotes', JSON.stringify(updatedStorage))
        setMyNotes(JSON.parse(localStorage.getItem('myNotes')))
        setIsEditor(null)
    }

    function deleteNote(e){ 
        e.preventDefault()
        let storage = JSON.parse(localStorage.getItem('myNotes')) ? JSON.parse(localStorage.getItem('myNotes')) : []
        let currentNoteIndex = storage.findIndex(obj => obj.index === isEditor.index)
        let updatedStorage = [...storage]
        updatedStorage.splice(currentNoteIndex,1)
        localStorage.setItem('myNotes', JSON.stringify(updatedStorage))
        setMyNotes(updatedStorage)
        setIsEditor(null)
    }
    return (
        <form className="note_editor" data-note-edited="">
            <input className="note_title" placeholder="Note Title" defaultValue={isEditor.title}/>
            <textarea className="note_details" placeholder="Type Your Details" defaultValue={isEditor.details} />
            <div className="editor_buttons">
                <button type="submit" onClick={saveNote}> Save </button>
                <button onClick={(e) => { e.preventDefault(); setIsEditor(null) }}> Cancel </button>
                {isDeleteButton && <button onClick={(e)=>{deleteNote(e)}}> Delete </button> }
            </div>
        </form>

    )
}