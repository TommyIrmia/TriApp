import { MailService } from "../services/mail.service.js";

const { Link } = ReactRouterDOM


export class MailNav extends React.Component {

    state = {
        emails: [],
    }

    componentDidMount() {
        MailService.getEmailsByFolder('inbox')
            .then(emails => this.setState({ emails }))
    }

    render() {
        const { emails } = this.state
        const { onSetFolder, folder } = this.props
        return (
            <section className="mail-nav">
                <Link to='/mail/new-compose' className="clean">
                    <div className='compose'>
                        <div className="add-img"><img src="././img/add.jpg" /></div>
                        Compose</div>
                </Link>
                <div className={`nav-item ${(folder === 'inbox') ? 'chosen' : ''}`}
                    onClick={() => onSetFolder('inbox')}>
                    <div className="inbox-img"><img src="././img/inbox.png" /></div>
                    Inbox
                    <h4>
                        {(MailService.getNumOfUnread(emails)) ? MailService.getNumOfUnread(emails) : ''}
                    </h4>
                </div>

                <div className={`nav-item ${(folder === 'starred') ? 'chosen' : ''}`}
                    onClick={() => onSetFolder('starred')}>
                    <div className="star-img inbox-img"><img src="././img/star.jpg" /></div>
                    Starred</div>

                <div className={`nav-item sent ${(folder === 'sent') ? 'chosen' : ''}`}
                    onClick={() => onSetFolder('sent')}>
                    <div className="seng-img inbox-img"><img src="././img/sent.jpg" /></div>
                    Sent</div>

                <div className={`nav-item draft ${(folder === 'draft') ? 'chosen' : ''}`}
                    onClick={() => onSetFolder('draft')}>
                    <div className="draft-img inbox-img"><img src="././img/draft.png" /></div>
                    Drafts</div>

                <div className={`nav-item trash ${(folder === 'trash') ? 'chosen' : ''}`}
                    onClick={() => onSetFolder('trash')}>
                    <div className="trash-img inbox-img"><img src="././img/trash.png" /></div>
                    Trash</div>

            </section>
        )
    }


}