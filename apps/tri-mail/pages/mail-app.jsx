import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { MailNav } from "../cmps/mail-nav.jsx";
import { MailService } from "../services/mail.service.js";

export class MailApp extends React.Component {

    state = {
        emails: [],
        filterBy: null,
        folder: 'inbox',
    }

    componentDidMount() {
        this.loadEmails();
    }

    componentWillUnmount() {
        this.setState({ emails: [], filterBy: null })
    }

    loadEmails = () => {
        MailService.getEmailsByFolder(this.state.folder)
            .then(emails => {
                MailService.query(this.state.filterBy, emails)
                    .then(emails => {
                        console.log(emails);
                        this.setState({ emails })
                    })
            })
    }

    onDeleteEmail = (ev, email) => {
        ev.stopPropagation();
        MailService.deleteEmail(email)
            .then(() => {
                this.loadEmails()
            })
    }

    onStarEmail = (ev, email) => {
        ev.stopPropagation();
        console.log(email);
        MailService.toggleStar(email.id)
            .then(() => this.loadEmails())

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

    onSetFolder = (folder) => {
        this.setState({ folder }, this.loadEmails);
    }

    render() {
        const { emails, folder } = this.state;
        return (
            <section className="mail-app">
                <MailFilter onSetFilter={this.onSetFilter} />
                <MailNav onSetFolder={this.onSetFolder} folder={folder} />
                {(emails.length) ?
                    <MailList emails={emails}
                        onToggleRead={this.onToggleRead}
                        onDeleteEmail={this.onDeleteEmail}
                        onStarEmail={this.onStarEmail}
                        loadEmails={this.loadEmails} />
                    : <div>There are no emails in this file..</div>}
            </section>
        )
    }
}