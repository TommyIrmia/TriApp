import { MailService } from "../services/mail.service.js";

const { Link } = ReactRouterDOM


export class MailNav extends React.Component {

    state = {
        emails: [],
    }

    componentDidMount() {
        MailService.query()
            .then(emails => this.setState({ emails }))
    }



    render() {
        const { emails } = this.state
        if (!emails) return <div>Loading</div>
        return (
            <section className="mail-nav">
                <Link to='/mail/new-compose' className="clean">
                    <div className="compose">
                        <div className="add-img"><img src="././img/add.jpg" /></div>
                        Compose</div>
                </Link>
                <div className="nav-item">
                    <div className="inbox-img"><img src="././img/inbox.png" /></div>
                    Inbox
                    <h4>
                        {(MailService.getNumOfUnread(emails)) ? MailService.getNumOfUnread(emails) : ''}
                    </h4>
                </div>
                <div className="nav-item">
                    <div className="star-img inbox-img"><img src="././img/star.jpg" /></div>
                    Starred</div>
                <div className="nav-item sent">
                    <div className="seng-img inbox-img"><img src="././img/sent.jpg" /></div>
                    Sent</div>
                <div className="nav-item draft">
                    <div className="draft-img inbox-img"><img src="././img/draft.png" /></div>
                    Drafts</div>
            </section>
        )
    }


}