import {NoteTxt} from './note-txt.jsx'
import {NoteImg} from './note-img.jsx'

export class NoteList extends React.Component {


    

render() {

    const DynamicCmp = (props) => {
        const {note} = props;
        // console.log('tommy ha homo',note.type);
        switch (note.type) {
            case 'note-txt':
                return <NoteTxt note={note}  />
            case 'note-img':
                return <NoteImg note={note} />
        }
    }






    const {notes} = this.props;
    return (
        <section>
            <section className="note-list flex" >
                {notes.map(note => <DynamicCmp key={note.id} note={note} />)}
            </section>
        </section>
    )
}
}