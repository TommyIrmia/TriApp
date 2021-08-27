import { NoteTxt } from './note-txt.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'


export class NotePreview extends React.Component {



    render() {


        const DynamicCmp = (props) => {
            const { note, onRemoveNote, onSetNotePin } = props;
            switch (note.type) {
                case 'note-txt':
                    return <NoteTxt onRemoveNote={onRemoveNote} note={note} onSetNotePin={onSetNotePin} />
                case 'note-img':
                    return <NoteImg onRemoveNote={onRemoveNote} note={note} onSetNotePin={onSetNotePin} />
                case 'note-todos':
                    return <NoteTodos onRemoveNote={onRemoveNote} note={note} onSetNotePin={onSetNotePin} />
            }
        }


        const { note, onRemoveNote, onSetNotePin } = this.props;
        return (
            <React.Fragment>
                <DynamicCmp onRemoveNote={onRemoveNote} note={note} onSetNotePin={onSetNotePin} />
            </React.Fragment>
        )
    }

}