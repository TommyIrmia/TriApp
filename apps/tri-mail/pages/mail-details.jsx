import { MailNav } from "../cmps/mail-nav.jsx";
import { MailService } from "../services/mail.service.js";

const { Link } = ReactRouterDOM

export class MailDetails extends React.Component {

    state = {
        emails: [],
        chosenEmail: null,
    }

    componentDidMount() {
        this.loadEmails();
        this.loadEmail();
    }

    loadEmails = () => {
        MailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }

    loadEmail = () => {
        const id = this.props.match.params.emailId
        MailService.getEmailById(id)
            .then(email => {
                if (!email) this.props.history.push('/')
                this.setState({ chosenEmail: email })
            })
    }

    onBack = () => {
        this.props.history.push('/mail')
    }

    onToggleRead = (email) => {
        console.log(email);
        email.isRead = !email.isRead
        MailService.toggleRead(email.id, email.isRead)
        this.onBack();
    }

    render() {
        const { emails, chosenEmail } = this.state;
        if (!chosenEmail) return <div>Loading..</div>
        return (
            <main className="mail-details">
                <MailNav emails={emails} />
                <section className="mail-info">
                    <div className="top-btns">
                        <button className="back-btn" onClick={() => this.onBack()}>
                            <img src="././img/back.png" /></button>
                        <div>
                            <button className="unread-btn" onClick={() => this.onToggleRead(chosenEmail)}><img src="././img/unread.png" /></button>
                            <button className="delete-btn"><img src="././img/trash.png" /></button>
                        </div>
                    </div>

                    <div className="mail-body">
                        <h1>{chosenEmail.subject}</h1>
                        <h2><span>From :</span> {MailService.getName(chosenEmail.from)} <small>'{chosenEmail.from}'</small></h2>
                        <h2><span>To :</span> {MailService.getName(chosenEmail.to)} <small>'{chosenEmail.to}'</small></h2>
                        <p>{chosenEmail.body}</p>
                        <small className="date">{MailService.getDate(chosenEmail.recievedAt)}</small>
                    </div>

                    <div className="bottom-btns">
                        <button className="reply-btn"><img src="././img/reply.png" /></button>
                        <button className="forward-btn"><img src="././img/forward.png" /></button>
                    </div>

                </section>

            </main>
        )
    }
}