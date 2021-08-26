import { NoteService } from '../services/note.service.js'
import { NoteActions } from './note-actions.jsx'
export class NoteTxt extends React.Component {


    state = {
        isContentEditable: false,
        txt: '',
        isHover: false,
        color: '',
    }

    contentRef = React.createRef()

    componentDidMount() {
        const {backgroundColor} = this.props.note.style
        this.setState({ color:backgroundColor})
    }

    onChangeColor = (ev,color) => {
        const {note} = this.props
        ev.stopPropagation();
        NoteService.setColor(note.id,color)
        this.setState({color})

    }


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
        const { isContentEditable, isHover,color } = this.state;
        return (
            <section
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })}>

                <div onClick={this.onUnEdit} className={(isContentEditable) ? 'screen' : ''}></div>

                
                <blockquote style={{backgroundColor:color}}
                className={`${note.type}  ${(isContentEditable) ? 'editable' : ''}`}
                    onClick={this.onSetEdit} ref={this.contentRef} contentEditable={isContentEditable}>
                    <h1>{note.info.txt}</h1>
                    {isHover && <NoteActions onChangeColor={this.onChangeColor} note={note} onRemoveNote={onRemoveNote} />}
                </blockquote>
            </section>

        )
    }


}