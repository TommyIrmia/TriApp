import { MailService } from "../services/mail.service.js";



export class ShortPreview extends React.Component {
    state = {
        isHover: false,
    }

    componentDidMount() {
        // this.setState({ isRead: this.props.email.isRead });
    }

    render() {
        const { isHover } = this.state;
        const { email, onToggleEmailPreview, onToggleRead, onDeleteEmail, onStarEmail } = this.props;
        return (
            <section className={`mail-preview ${email.isRead && 'read'}`} onClick={() => onToggleEmailPreview(email, true)}
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })} >
                <div className={`star ${(email.isStar) ? 'fas' : 'far'} fa-star`}
                    onClick={(event) => onStarEmail(event, email)}
                ></div>
                <h1 className="from">{MailService.getName(email.from)}</h1>
                <div className="mail-info">
                    <h1>{email.subject} </h1>
                </div>
                {!isHover && <h1 className="date">{MailService.getDate(email.recievedAt)}</h1>}
                {isHover &&
                    <div className="btns">
                        <button className="read-btn" onClick={(event) => onToggleRead(event, email)}>
                            <img src={`././img/${(email.isRead) ? 'un' : ''}read.png`} />
                        </button>
                        <button className="trash-btn" onClick={(event) => onDeleteEmail(event, email)}>
                            <img src="././img/trash.png" />
                        </button>
                    </div>}
            </section>
        )
    }
}