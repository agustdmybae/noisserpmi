
//css
import './css/App.css';
import './css/Header.css';

function App() {
  return (
    <div className="App" backgroundImage="url(/image.png)" backgroundRepeat="repeat-y">
      <header className="App-header">
        <img src={require("./images/header-logo.png")} className="header-logo" alt="Noisserpmo logo" />
          <p>
            Edit <code>src/App.js</code> and save.
          </p>
      </header>
      <section>
      </section>
    </div>
  );
}

export default App;
