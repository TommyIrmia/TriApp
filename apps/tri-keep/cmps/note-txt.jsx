export class NoteTxt extends React.Component {

    render() {
       const {note} = this.props;
    //    console.log(note);
        return(
            <section>
                <div className={note.type} >
                <h1>{note.info.txt}</h1>
                </div>
            </section>

        )
    }


}