

export class NoteTodos extends React.Component {


    render() {
        const {note} = this.props
        return (
            <section  className="note-todos">
                <div>{note.info.label} <button className="far fa-check-square" ></button> </div>
            </section>
        )
    }
}