import { ColorInput } from './color-input.jsx'
export class NoteActions extends React.Component {

    state = {
        isPaletteOn: false,
    }


    render() {
        const {note,onRemoveNote} = this.props;
        const {isPaletteOn} = this.state
        return (
            <section>
                <button onClick={() => {
                    onRemoveNote(note.id)
                }} className="far fa-trash-alt" ></button>


                <button onClick={() => {
                     this.setState({ isPaletteOn: true })
                }} className="fas fa-palette"></button>


                {isPaletteOn && <ColorInput/>}
                <button className="fas fa-thumbtack"></button>
            </section>
        )
    }
}