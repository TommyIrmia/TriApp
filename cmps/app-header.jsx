const { NavLink, Link } = ReactRouterDOM;

export function AppHeader() {
    return (<section className="app-header">
        <Link to={'/'} className="main-logo clean">
            <img src="./img/logo.png" />
            <h1>TriApp</h1>
        </Link>
        <div className="logos">
            <NavLink to={'/book'} className="book-logo"><img src="./img/booklogo.png" /></NavLink>
            <NavLink to={'/mail'} className="mail-logo"><img src="./img/maillogo.png" /></NavLink>
            <NavLink to={'/keep'} className="keep-logo"><img src="./img/keeplogo.png" /></NavLink>
        </div>
    </section>
    )
}
