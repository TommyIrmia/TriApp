import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, pinnedNotes, onRemoveNote, onSetNotePin,onDuplicateNote }) {

    return (
        <section className="note-list flex">
            <section className="pinned-note-list flex">
                {pinnedNotes.map(note => <NotePreview onDuplicateNote={onDuplicateNote} onRemoveNote={onRemoveNote} key={note.id}
                    note={note} onSetNotePin={onSetNotePin} />)}
            </section>
            <section className="unpinned-note-list ">
                {notes.map(note => <NotePreview onDuplicateNote={onDuplicateNote} onRemoveNote={onRemoveNote} key={note.id}
                    note={note} onSetNotePin={onSetNotePin} />)}
            </section>
        </section>
    )
}