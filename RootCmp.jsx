const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { Home } from './js/Home.jsx'
import { AppHeader } from './js/cmps/app-header.jsx'
import { AppFooter } from './js/cmps/app-footer.jsx'

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <section className="main-layout">
                <Switch>
                    {/* <Route path="/keep" component={KeepApp} /> */}
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



 