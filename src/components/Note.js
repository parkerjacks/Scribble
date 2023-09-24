
import React from "react"

export default function Note({ editExistingNote, info, setIsEditor }) {
    let title = info.title
    let details = info.details
    let uniqueId = info.index

    return (
        <div className="note" onClick={(e) => {editExistingNote(e) }} data-uniqueId={uniqueId}>
            <div className="saved_note_title"> {title} </div>
            <div className="saved_note_details"> {decodeURI(details)} </div>
        </div>
    )
}