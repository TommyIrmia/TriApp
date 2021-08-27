import { NoteService } from '../services/note.service.js'
import { NoteActions } from './note-actions.jsx'

export class NoteTodos extends React.Component {

    state = {
        isContentEditable: false,
        isHover: false,
        color: '',
        isDone: false,
    }


    contentRef = React.createRef()

    componentDidMount() {
        const { backgroundColor } = this.props.note.style;
        const { isPinned } = this.props.note;
        this.setState({ color: backgroundColor, isPinned })
    }

    onChangeColor = (ev, color) => {
        const { note } = this.props
        ev.stopPropagation();
        NoteService.setColor(note.id, color)
        this.setState({ color })

    }

    onSetEdit = () => {
        this.setState({ isContentEditable: true });
    }

    onUnEdit = () => {
        const { innerText } = this.contentRef.current;
        this.setState({ isContentEditable: false })
        NoteService.saveTxt(this.props.note.id, innerText)
    }


    checkBoxClick = (ev) => {
        ev.stopPropagation();
        const {isDone} = this.state;
        setState({ isDone:!isDone})
    }

    
   

render() {
    const { note, onRemoveNote, onSetNotePin } = this.props;
    const { isContentEditable, isHover, color,isDone } = this.state;
    const {info} = this.props.note;
    return (
        <section className='note-txt-container' 
            onMouseEnter={() => this.setState({ isHover: true })}
            onMouseLeave={() => this.setState({ isHover: false })}>
            <div onClick={this.onUnEdit} className={(isContentEditable) ? 'screen' : ''}></div>
            <blockquote style={{ backgroundColor: color }}
                className={`${note.type}  ${(isContentEditable) ? 'editable' : ''}`}
                onClick={this.onSetEdit} ref={this.contentRef} contentEditable={isContentEditable}
                suppressContentEditableWarning={true}>
                <h3>{info.label} <button onClick={this.checkBoxClick} className="far fa-square" ></button> </h3>
                {info.todos.map((todo)  =>{
                    return <React.Fragment key={todo.id} >
                        <p>{todo.txt} <button className="far fa-square" ></button> </p>
                    </React.Fragment>
                })}
                
                {isHover && <NoteActions onSetNotePin={onSetNotePin} onChangeColor={this.onChangeColor} note={note} onRemoveNote={onRemoveNote} />}
            </blockquote>
        </section>

    )
}
}
