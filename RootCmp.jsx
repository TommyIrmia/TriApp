const Router = ReactRouterDOM.HashRouter; ``
const { Route, Switch } = ReactRouterDOM;

import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { NoteApp } from './apps/tri-keep/pages/note-app.jsx'
import { MailApp } from './apps/tri-mail/pages/mail-app.jsx'
import { MailDetails } from './apps/tri-mail/pages/mail-details.jsx';
import { MailCompose } from './apps/tri-mail/pages/mail-compose.jsx';

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <section className="main-layout">
                <Switch>
                    <Route path="/keep" component={NoteApp} />
                    <Route path="/mail/new-compose" component={MailCompose} />
                    <Route path="/mail/:emailId" component={MailDetails} />
                    <Route path="/mail" component={MailApp} />
                    {/* <Route path="/book" component={BookApp} /> */}
                    <Route path="/" component={Home} />
                </Switch>
            </section>

            <footer>
                <AppFooter />
            </footer>
        </Router>
    );
}



