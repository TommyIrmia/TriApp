export class NoteAdd extends React.Component {

<<<<<<< HEAD
    state = {
        inputInfo: {
            type: 'note-text',
            placeholder: 'Write a note...',
            txt: '',
        }
=======
state={
    inputInfo:{
        type:'note-txt',
        placeholder: 'Write a note...',
        txt: '',
>>>>>>> 3a4c9a5bf70af17dfc0137e74718c1109cd7350b
    }


<<<<<<< HEAD
    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.value;
        console.log('from handle change', field, val);
        this.setState({ txt: val });
        this.setState({ inputInfo: { ...this.state.inputInfo, [field]: val } })
    }

=======
  handleChange = (ev) => {
    const field = ev.target.name;
    const val = ev.target.value;
    this.setState({txt: val});
    this.setState({ inputInfo: { ...this.state.inputInfo, [field]:val } })
  }
>>>>>>> 3a4c9a5bf70af17dfc0137e74718c1109cd7350b


    refArea = React.createRef()

    componentDidMount() {
        this.refArea.current.focus()
    }

    onSelectInput = (selectedType) => {
        if (selectedType === 'note-txt') this.onChangeInput('Write a note...', selectedType)
        else if (selectedType === 'note-img') this.onChangeInput('Paste Image Link...', selectedType)
        else if (selectedType === 'note-todos') this.onChangeInput('Write todos seperated by comma...', selectedType)
        this.refArea.current.focus()
    }


    onChangeInput = (placeholder, type) => {
        const { txt } = this.state.inputInfo
        const userSelect = { placeholder, type, txt }
        this.setState({ inputInfo: userSelect })
    }


    render() {
        const { inputInfo } = this.state;
        const { placeholder, type, txt } = this.state.inputInfo
        const { onAddNote } = this.props;
        return (
            <div className="note-add">
                <div className="txt-container" >
<<<<<<< HEAD
                    <label htmlFor="note-txt"></label>
                    <textarea ref={this.refArea} type="textarea" id="note-txt" name='txt'
                        value={txt} placeholder={placeholder} onChange={this.handleChange} />
                    <button onClick={() => {
                        onAddNote(inputInfo)
                    }} > <img src="../../../img/add.png" /></button>
                    <div className="flex fonts-container" >
                        <p onClick={() => {
                            this.onSelectInput('note-txt')
                        }} title="Text" className="fas fa-pencil-alt"></p>
                        <p onClick={() => {
                            this.onSelectInput('note-img')
                        }} title="imag" className="fas fa-imag"></p>
                        <p onClick={() => {
                            this.onSelectInput('note-todos')
                        }} title="List" className="fas fa-list"></p>
                    </div>

=======
                <label htmlFor="note-txt"></label>
                <textarea ref={this.refArea} type="textarea" id="note-txt" name='txt' 
                value={txt} placeholder={placeholder} onChange={this.handleChange} />
                <button  onClick={()=>{
                    onAddNote(inputInfo)
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
             
>>>>>>> 3a4c9a5bf70af17dfc0137e74718c1109cd7350b
                </div>
            </div>
        )
    }
}