
//css
import './css/App.css';
import './css/Header.css';

function App() {
  return (
    <div className="App" backgroundImage="url(/image.png)" backgroundRepeat="repeat-y">
      <header className="header">
        <img src={require("./images/header-logo.png")} className="header-logo" alt="Noisserpmo logo" />
        <div className="header-navigation">
          <button>Home</button>
          <button>Projects</button>
          <button>Our Team</button>
        </div>
        <p className="header-time">2023/10/5</p>
      </header>
      <section>
      </section>
    </div>
  );
}

export default App;
