import { MailList } from "../cmps/mail-list.jsx";
import { MailNav } from "../cmps/mail-nav.jsx";
import { MailService } from "../services/mail.service.js";

export class MailApp extends React.Component {

    state = {
        emails: [],
        chosenEmail: null,
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        MailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }

    onDeleteEmail = (ev, email) => {
        ev.stopPropagation();
        MailService.deleteEmail(email)
            .then(emails => {
                this.setState({ emails })
            })
    }

    onToggleRead = (ev, email) => {
        ev.stopPropagation();
        email.isRead = !email.isRead
        MailService.toggleRead(email.id, email.isRead)
        this.loadEmails();
    }


    render() {
        const { emails } = this.state;
        if (!emails.length) return <div>Loading...</div>;
        return (
            <section className="mail-app">
                {/* <MailFilter /> */}
                <MailNav emails={emails} />
                <MailList emails={emails}
                    onToggleRead={this.onToggleRead}
                    onDeleteEmail={this.onDeleteEmail}
                    loadEmails={this.loadEmails}
                />
            </section>
        )
    }
}