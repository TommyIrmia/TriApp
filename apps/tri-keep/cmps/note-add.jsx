export class NoteAdd extends React.Component {

state={
    txt: ''
}


  handleChange = (ev) => {
    const val = ev.target.value;
    this.setState({txt: val});
  }

  refArea = React.createRef()

  componentDidMount() {
      this.refArea.current.focus()
  }
 
  onKeepTypeSelect = (selectedType) => { // Change input type and placeholder on user click
    if (selectedType === 'note-txt') this.updateState('text', 'Write a note', selectedType)
    else if (selectedType === 'note-img') this.updateState('text', 'Paste Image Link', selectedType)
    else if (selectedType === 'note-todos') this.updateState('text', 'Write todos seperated by comma', selectedType)
    this.refArea.current.focus()
}

    render() {
            const {txt} = this.state;
            const {notes,onAddNote} = this.props;
        return (
            <div className="note-add">
                <div className="txt-container" >
                <label htmlFor="note-txt"></label>
                <textarea ref={this.refArea} type="textarea" id="note-txt" name="txt" 
                value={txt} placeholder="Add Note..." onChange={this.handleChange} />
                <button  onClick={()=>{
                    onAddNote(txt,notes.type)
                }} > <img src="../../../img/add.png"/></button>
                <div className="flex fonts-container" >
                <p onClick={()=>{
                     this.onSelectInput('note-txt')
                }} title="Text" className="fas fa-pencil-alt"></p>
                <p onClick={()=>{
                    this.onSelectInput('note-img')
                }} title="imag" className="fas fa-imag"></p>
                <p onClick={()=>{
                    this.onSelectInput('note-todos')
                    }} title="List" className="fas fa-list"></p>
                </div>
             
                </div>
            </div>
        )
    }
}