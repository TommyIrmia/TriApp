import { MailList } from "../cmps/mail-list.jsx";
import { MailNav } from "../cmps/mail-nav.jsx";

export class MailApp extends React.Component {



    render() {
        return (
            <section className="mail-app">
                {/* <MailFilter /> */}
                <MailNav />
                <MailList />
            </section>
        )
    }
}