const { NavLink, Link } = ReactRouterDOM;

export class AppHeader extends React.PureComponent {

    state = {
        isNavDown: false,
    }

    onToggleNav = () => {
        this.setState({ isNavDown: true });
    }

    render() {
        const {isNavDown} = this.state
        console.log(isNavDown);
        return (<section className="app-header">
        <Link to={'/'} className="main-logo clean">
            <img src="./img/logo.png" />
            <h1>TriApp</h1>
        </Link>
        <div className={(isNavDown) ? 'nav-down' :''} className="logos">
            <NavLink to={'/mail'} className="mail-logo"><img src="./img/maillogo.png" /></NavLink>
            <NavLink to={'/keep'} className="keep-logo"><img src="./img/keeplogo.png" /></NavLink>
            <NavLink to={'/book'} className="book-logo"><img src="./img/booklogo.png" /></NavLink>
        </div>
        <button onClick={this.onToggleNav} className="btn-toggle-nav fas fa-caret-square-down" ></button>
    </section>
    )
}
}
