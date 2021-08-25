import { MailList } from "../cmps/mail-list.jsx";
import { MailNav } from "../cmps/mail-nav.jsx";
import { MailService } from "../services/mail.service.js";

export class MailApp extends React.Component {

    state = {
        emails: [],

    }

    componentDidMount() {
        MailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }

    render() {
        const {emails} = this.state;
        if(!emails.length) return <div>Loading...</div>;
        return (
            <section className="mail-app">
                {/* <MailFilter /> */}
                <MailNav />
                <MailList emails={emails}/>
            </section>
        )
    }
}