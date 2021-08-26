import { NoteService } from '../services/note.service.js'
import { NoteActions } from './note-actions.jsx'
export class NoteTxt extends React.Component {


    state = {
        isContentEditable: false,
        txt: '',
        isHover: false,
    }

    contentRef = React.createRef()




    onSetEdit = () => {
        this.setState({ isContentEditable: true });
    }

    onUnEdit = () => {
        const { innerText } = this.contentRef.current;
        this.setState({ isContentEditable: false })
        NoteService.saveTxt(this.props.note.id, innerText)
        this.setState({ txt: innerText });
    }



    render() {
        const { note, onRemoveNote } = this.props;
        const { isContentEditable, isHover } = this.state;
        return (
            <section
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })}>

                <div onClick={this.onUnEdit} className={(isContentEditable) ? 'screen' : ''}></div>
                <blockquote className={`${note.type}  ${(isContentEditable) ? 'editable' : ''}`}
                    onClick={this.onSetEdit} ref={this.contentRef} contentEditable={isContentEditable}>
                    <h1>{note.info.txt}</h1>
                    {isHover && <NoteActions note={note} onRemoveNote={onRemoveNote} />}
                </blockquote>
            </section>

        )
    }


}