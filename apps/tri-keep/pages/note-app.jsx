import {NoteAdd} from '../cmps/note-add.jsx'
import {NoteList} from '../cmps/note-list.jsx'
import {NoteService} from '../services/note.service.js'

export class NoteApp extends React.Component {

    state ={
        notes: [],
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        NoteService.query()
        .then((notes) =>{this.setState({notes})})
    }

    onRemoveNote = (noteId) => {
        NoteService.removeNote(noteId)
        .then((notes) =>{this.setState({notes})})
    }

    render(){
        const {notes} = this.state;
        return (
            <section className="note-app">
                <NoteAdd/>
                <NoteList notes={notes} onRemoveNote={this.onRemoveNote} />
            </section>
        )
    }
}