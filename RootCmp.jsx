const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;



export function App() {
    return (
        <Router>
            <header>
            </header>

            <section className="main-layout">
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </section>
        </Router>
    );
}



