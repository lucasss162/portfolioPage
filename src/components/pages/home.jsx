import MainNavBar from "../organisms/navBar"
function Home() {
    return (
        <div className="App">
            <MainNavBar></MainNavBar>
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
            </header>
        </div>
    )
}

export default Home