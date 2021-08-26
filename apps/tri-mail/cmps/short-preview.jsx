import { MailService } from "../services/mail.service.js";



export class ShortPreview extends React.Component {
    state = {
        isHover: false,
        isRead: false,
    }

    componentDidMount() {
        // console.log(this.props.email);
        this.setState({isRead: this.props.email.isRead});
    }

    onToggleRead = (ev, email) => {
        ev.stopPropagation();
        MailService.toggleRead(email.id, !email.isRead)
        this.setState({isRead: email.isRead})

    }


    render() {
        const { isHover, isRead } = this.state;
        const { email, onToggleEmailPreview } = this.props;
        return (
            <section className={`mail-preview ${email.isRead && 'read'}`} onClick={() => onToggleEmailPreview()}
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })} >
                <h1 className="from">{MailService.getName(email.from)}</h1>
                <div className="mail-info">
                    <h1>{email.subject} </h1>
                </div>
                {!isHover && <h1 className="date">{MailService.getDate(email.recievedAt)}</h1>}
                {isHover &&
                    <div className="btns">
                        <button className="read-btn" onClick={(event) => this.onToggleRead(event, email)}>
                            <img src={`././img/${(isRead) ? 'un' : ''}read.png`} />
                        </button>
                        <button className="trash-btn"><img src="././img/trash.png" /></button>
                    </div>}
            </section>
        )
    }
}