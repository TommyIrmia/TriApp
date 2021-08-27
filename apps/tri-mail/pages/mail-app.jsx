import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { MailNav } from "../cmps/mail-nav.jsx";
import { MailService } from "../services/mail.service.js";

export class MailApp extends React.Component {

    state = {
        emails: [],
        chosenEmail: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        MailService.query(this.state.filterBy)
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


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails);
    };


    render() {
        const { emails } = this.state;
        return (
            <section className="mail-app">
                <MailFilter onSetFilter={this.onSetFilter} />
                <MailNav />
                {(emails.length) ? <MailList emails={emails}
                    onToggleRead={this.onToggleRead}
                    onDeleteEmail={this.onDeleteEmail}
                    loadEmails={this.loadEmails}
                /> : !emails.length && <div>There are no emails in this file..</div>}
            </section>
        )
    }
}