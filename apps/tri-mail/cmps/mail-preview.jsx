

export class MailPreview extends React.Component {

    state ={
        isClicked: false,
    }

    componentDidMount() {
        // console.log(this.props.email);
    }

    getDate = (date) => {
        const newDate = new Date(date);
        const dates = newDate.toDateString().split(' ');

        return dates[1] + ' ' + dates[2]
    }

    getName = (email) => {
        const deconstructedEmail = email.split('@');
        return deconstructedEmail[0];
    }

    onToggleEmailPreview = () => {
        this.setState({isClicked: !this.state.isClicked})
        console.log(this.state.isClicked);
    }

    render() {
        const {email} = this.props;
        const {isClicked} = this.state;
        return (
            <section className={`mail-preview ${email.isRead && 'read'}`} onClick={() => this.onToggleEmailPreview()}>
                <h1 className="from">{this.getName(email.from)}</h1>
                <div className="mail-info">
                    <h1>{email.subject} </h1>
                    {isClicked && <p>{email.body}</p>}
                </div>
                <h1 className="date">{this.getDate(email.recievedAt)}</h1>
            </section>
        )
    }
}