const Router = ReactRouterDOM.HashRouter;``
const { Route, Switch } = ReactRouterDOM;

import { Home } from './js/Home.jsx'
import { AppHeader } from './js/cmps/app-header.jsx'
import { AppFooter } from './js/cmps/app-footer.jsx'
import { NoteApp } from './apps/note-app.jsx'
import { MailApp } from './apps/tri-mail/pages/mail-app.jsx'

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <section className="main-layout">
                <Switch>
                    {/* <Route path="/keep" component={NoteApp} /> */}
                    {/* <Route path="/mail" component={MailApp} /> */}
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



 