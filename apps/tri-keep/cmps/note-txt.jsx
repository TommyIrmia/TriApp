export class NoteTxt extends React.Component {


    state = {
        isEditable: false,
    }


    setEdit = () => {
        this.setState({ isEditable: !this.state.isEditable})
    }


    render() {
       const {note} = this.props;
       const {isEditable} = this.state;
        return(
            <section>
                <div onClick={this.setEdit} className= {(isEditable) ? 'editable' : note.type }  >
                <h1>{note.info.txt}</h1>
                </div>
            </section>

        )
    }


}