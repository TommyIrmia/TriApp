export class NoteAdd extends React.Component {

state={
    txt: ''
}


  handleChange = (ev) => {
    const val = ev.target.value;
    this.setState({txt: val});
  }


    render() {
            const {txt} = this.state;
            console.log(txt);
        return (
            <div className="note-add">
                <div className="txt-container" >
                <label htmlFor="note-txt"></label>
                <textarea type="textarea" id="note-txt" name="txt" 
                value={txt} placeholder="Add Note..." onChange={this.handleChange} />
                <button> <img src="../../../img/add.png"/></button>
                </div>
            </div>
        )
    }
}