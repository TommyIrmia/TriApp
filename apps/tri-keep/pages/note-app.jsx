import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteService } from '../services/note.service.js'

export class NoteApp extends React.Component {

    state = {
        notes: [],
        pinnedNotes: [],
    }

    componentDidMount() {
        this.loadNotes();
        this.loadPinnedNotes();
    }

    loadNotes = () => {
        NoteService.query(false)
            .then((notes) => { this.setState({ notes }) })
    }

    loadPinnedNotes = () => {
        NoteService.query(true)
            .then((pinnedNotes) => this.setState({ pinnedNotes }))
    }

    onRemoveNote = (noteId) => {
        NoteService.removeNote(noteId)
            .then((notes) => { this.setState({ notes }) })
    }

    onSetNotePin = (ev, noteId) => {
        ev.stopPropagation();
        NoteService.setNotePin(noteId)
            .then(() => {
                this.loadNotes();
                this.loadPinnedNotes();
            })
    }

    onAddNote = (inputInfo) => {
        if (!inputInfo.txt) return;
        NoteService.addNote(inputInfo)
        .then((notes) => { this.setState({ notes})})
    }

    render() {
        const { notes, pinnedNotes } = this.state;
        return (
            <section className="note-app">
        <NoteAdd notes={notes} onAddNote={this.onAddNote} />
                <NoteList notes={notes}
                    pinnedNotes={pinnedNotes}
                    onRemoveNote={this.onRemoveNote}
                    onSetNotePin={this.onSetNotePin} />
            </section>
        )
    }
}