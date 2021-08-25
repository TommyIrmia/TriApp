const Router = ReactRouterDOM.HashRouter;``
const { Route, Switch } = ReactRouterDOM;

import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { MailApp } from './apps/tri-mail/pages/mail-app.jsx'

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <section className="main-layout">
                <Switch>
                    {/* <Route path="/keep" component={KeepApp} /> */}
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



 