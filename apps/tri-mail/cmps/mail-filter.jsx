export class MailFilter extends React.Component {
    state = {
        filterBy: {
            word: '',
            read: '',
            unread: '',
        },
    };

    inputRef = React.createRef()


    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    };

    render() {
        const { word, read, unread } = this.state.filterBy;
        return (
            <form className='mail-filter' onSubmit={this.onFilter}>
                <label htmlFor='by-word' className="flex">
                    <div className="search-img">
                        <img src="././img/search.png" />
                    </div>
                    <input
                        ref={this.inputRef} name='word' id='by-word'
                        type='text' placeholder='Search' value={word}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        );
    }
}
