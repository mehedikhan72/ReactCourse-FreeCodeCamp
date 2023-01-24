
// function MainContent() {
//     return (
//         <div>
//             <h1>Welcome to my website.</h1>
//         </div>
//     )
// }

function Nav() {
    return(
        <nav className="nav">
            <img className="nav-logo" src="react-logo-png.png"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function ReactFacts() {
    return (
        <div className="react-facts">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <small>© 2023 mehedikhan development. All rights reserved.</small>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Nav />
        <ReactFacts />
        <Footer />
    </div>
    , document.getElementById('root')
);