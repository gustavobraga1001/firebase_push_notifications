import logo from "./logo.svg";
import "./App.css";
import Notification from "./components/Notification";

function App() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then(function (registration) {
        console.log(
          "Service Worker registration successful with scope: ",
          registration.scope
        );
      })
      .catch(function (err) {
        console.log("Service Worker registration failed: ", err);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <Notification />
    </div>
  );
}

export default App;
