export class NoteTxt extends React.Component {


    state = {
        contentEditable: false,
    }


    setEdit = () => {
        this.setState({ contentEditable: true})
        // this.setState({ contentEditable: !this.state.contentEditable})
    }

    unEdit = () => {
        this.setState({ contentEditable: false })
    }

    render() {
       const {note} = this.props;
       const {contentEditable} = this.state;
       console.log(contentEditable);
        return(
            <section>
                <div onClick={this.unEdit} className={(contentEditable) ? 'screen' : ''}></div>
                <blockquote className={`${note.type}  ${(contentEditable) ? 'editable' : ''}`} 
                onClick={this.setEdit}  contentEditable = {contentEditable}>
                <h1>{note.info.txt}</h1>
                </blockquote>
            </section>

        )
    }


}