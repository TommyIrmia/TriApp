export class NoteImg extends React.Component {

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