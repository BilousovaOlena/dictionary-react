import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer mt-4">
          <small>
            <a
              href="https://github.com/BilousovaOlena/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              Coded
            </a>{" "}
            {""}
            by Bilousova Olena
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
