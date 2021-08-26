import { ColorInput } from './color-input.jsx'
export class NoteActions extends React.Component {

    state = {
        isPaletteOn: false,
    }

    onOpenPalette = (ev) => {
        ev.stopPropagation();
        this.setState({ isPaletteOn: true })
    }

    render() {
        const {note,onRemoveNote,onChangeColor} = this.props;
        const {isPaletteOn} = this.state
        return (
            <section>
                <button onClick={() => {
                    onRemoveNote(note.id)
                }} className="far fa-trash-alt" ></button>


                <button className="fas fa-thumbtack"></button>
                <button onClick={this.onOpenPalette} className="fas fa-palette"></button>


                {isPaletteOn && <ColorInput onChangeColor={onChangeColor} />}
            </section>
        )
    }
}