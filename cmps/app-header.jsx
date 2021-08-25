const { Link } = ReactRouterDOM;

export function AppHeader() {
    return (<section className="app-header">
        <Link to={'/'} className="main-logo clean">
            <img src="./img/logo.png" />
            <h1>TriApp</h1>
        </Link>
        <div className="logos">
            <Link to={'/mail'} className="mail-logo"><img src="./img/maillogo.png" /></Link>
            <Link to={'/keep'} className="keep-logo"><img src="./img/keeplogo.png" /></Link>
            <Link to={'/'} className="book-logo"><img src="./img/booklogo.png" /></Link>
        </div>
    </section>
    )
}
