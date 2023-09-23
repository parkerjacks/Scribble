
import React from "react"

export default function Note({info }) {
    let title = info.title
    let details = info.details
    return (
        <div className="note" uniqueId={info.index}>
            <div> {title} </div>
            <div> {details} </div>
        </div>
    )
}