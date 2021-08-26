import {NoteService} from '../services/note.service.js'
export class NoteTxt extends React.Component {


    state = {
        isContentEditable: false,
        txt:''
    }

    contentRef = React.createRef()


    // componentDidMount() {
    //     console.log();
    // }

    onSetEdit = () => {
        this.setState({ isContentEditable: true });
    }
    
    onUnEdit = () => {
        const {innerText} = this.contentRef.current;
        this.setState({ isContentEditable: false })
        NoteService.saveTxt(this.props.note.id,innerText)
        this.setState({ txt:innerText });
    }

    render() {
       const {note} = this.props;
       const {isContentEditable,txt} = this.state;
        return(
            <section>
                <div onClick={this.onUnEdit} className={(isContentEditable) ? 'screen' : ''}></div>
                <blockquote className={`${note.type}  ${(isContentEditable) ? 'editable' : ''}`} 
                onClick={this.onSetEdit} ref={this.contentRef} contentEditable = {isContentEditable}>
                <h1>{note.info.txt}</h1>
                </blockquote>
            </section>

        )
    }


}