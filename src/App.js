import App from "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <h3>11/12/2020</h3>
          <br />
          <h2>
            <i className="fas fa-map-marker-alt"></i> <span>Raasiku</span>
          </h2>
          <br />
          <Weather />
          <Search />
          <br />
          <div className="name">
            <p>
              <small>
                <a href="https://github.com/KerstiA/FreshWeatherApp">
                  Open-source code-
                </a>
                by Kersti Allikvee.
              </small>
            </p>
          </div>
        </div>
        <Forecast />
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
