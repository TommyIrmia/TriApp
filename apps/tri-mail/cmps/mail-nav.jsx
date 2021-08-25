
export class MailNav extends React.Component {
    
    render() {
        return (
            <section className="mail-nav">
                <div className="compose">
                    <div className="add-img"><img src="././img/add.jpg" /></div>
                    Compose</div>
                <div className="nav-item">
                    <div className="inbox-img"><img src="././img/inbox.png" /></div>
                    Inbox</div>
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