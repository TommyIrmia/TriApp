const { Link } = ReactRouterDOM;

export function Home() {

    return (
        <main className="home">

            <Link to={'/mail'} className="app-preview app1 clean">
                <div className="app-img"> <img src="./img/mail-app1.png"/> </div>
                <div className="app-info">
                    <h1>TriMail</h1>
                    <h3>An app to manage your emails the best way possible! Tri it, you won't regeret it ;)!</h3>
                </div>
            </Link>

            <Link to={'/keep'} className="app-preview app2 clean">
                <div className="app-img"> <img src="./img/keep-app.png" /> </div>
                <div className="app-info">
                    <h1>TriKeep</h1>
                    <h3>An app that will let you keep all of your important thoughts, desires and passions all in one place! </h3>
                </div>
            </Link>

            <Link to={'/'} className="app-preview app3 clean">
                <div className="app-img"> here will be an img of the site</div>
                <div className="app-info">
                    <h1>TriBook</h1>
                    <h3>An app that will contain all of your favorite books! add new books, filter thorugh them and ofcouse add reviews!</h3>
                </div>
            </Link>

            <h1 className="team-head">The Team</h1>
            <div className="team">
                <div className="member">
                    <div className="member-img"><img src="./img/tomer.jpg" /></div>
                    <div className="member-info">
                        <h1>Tomer Morad</h1>
                        <p>A fullstack developer student at Coding Academy.</p>
                    </div>
                </div>
                <div className="member">
                    <div className="member-img"><img src="./img/tommy.jpg" /></div>
                    <div className="member-info">
                        <h1>Tommy Irmia</h1>
                        <p>A fullstack developer student at Coding Academy.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}