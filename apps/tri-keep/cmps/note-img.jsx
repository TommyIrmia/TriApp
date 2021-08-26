export class NoteImg extends React.Component {


    state = {
        isEditable: false,
        txt: '',
        isHover: false,
        color: '',
        isPinned: false,
    }


    // componentDidMount() {
    //     const { backgroundColor } = this.props.note.style;
    //     const { isPinned } = this.props.note;
    //     this.setState({ color: backgroundColor, isPinned })
    // }

    // onChangeColor = (ev, color) => {
    //     const { note } = this.props
    //     ev.stopPropagation();
    //     NoteService.setColor(note.id, color)
    //     this.setState({ color })

    // }

    // onSetNotePin = (ev) => {
    //     const { isPinned } = this.state;
    //     const { note } = this.props
    //     ev.stopPropagation();
    //     this.setState({ isPinned: !isPinned })
    //     console.log('before saving', isPinned);
    //     NoteService.setNotePin(note.id, isPinned)
    // }

    // onSetEdit = () => {
    //     this.setState({ isEditable: true });
    // }

    // onUnEdit = () => {
    //     this.setState({ isEditable: false })
    // }

    render() {
       const {note} = this.props;
        return(
            <section>
                <div className={note.type} >
                <img src={note.info.url} />
                </div>
            </section>

        )
    }


}

// render() {
//     const { note, onRemoveNote } = this.props;
//     const { isContentEditable, isHover, color, isPinned } = this.state;
//     console.log('isPinned', isPinned);
//     return (
//         <section className='note-txt-container' className={(isPinned) ? 'pinned' : ''}
//             onMouseEnter={() => this.setState({ isHover: true })}
//             onMouseLeave={() => this.setState({ isHover: false })}>
//             <div onClick={this.onUnEdit} className={(isContentEditable) ? 'screen' : ''}></div>
//             <blockquote style={{ backgroundColor: color }}
//                 className={`${note.type}  ${(isContentEditable) ? 'editable' : ''}`}
//                 onClick={this.onSetEdit} ref={this.contentRef} contentEditable={isContentEditable}>
//                 <h1>{note.info.txt}</h1>
//                 {isHover && <NoteActions onSetNotePin={this.onSetNotePin} onChangeColor={this.onChangeColor} note={note} onRemoveNote={onRemoveNote} />}
//             </blockquote>
//         </section>

//     )
// }