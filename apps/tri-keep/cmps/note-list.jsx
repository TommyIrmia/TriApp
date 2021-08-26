import {NotePreview} from './note-preview.jsx'

export function NoteList ({notes,onRemoveNote}) {


    return (
        <section>
            <section className="note-list flex" >
                {notes.map(note => <NotePreview onRemoveNote={onRemoveNote} key={note.id} note={note} />)}
            </section>
        </section>
    )
}