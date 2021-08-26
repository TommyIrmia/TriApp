import {NoteTxt} from './note-txt.jsx'
import {NoteImg} from './note-img.jsx'
import {NoteTodos} from './note-todos.jsx'


export class NotePreview extends React.Component {



    render(){


        const DynamicCmp = (props) => {
            const {note,onRemoveNote} = props;
            switch (note.type) {
                case 'note-txt':
                    return <NoteTxt onRemoveNote={onRemoveNote} note={note}  />
                case 'note-img':
                    return <NoteImg note={note} />
                case 'note-todos':
                    return <NoteTodos note={note} />
            }
        }


        const {note,onRemoveNote} = this.props;
        return (
            <React.Fragment>
                <DynamicCmp onRemoveNote={onRemoveNote}  note={note} />
            </React.Fragment>
        )
    }

}