
//css
import Intropage from './components/intropage';
import Workpage from './components/workpage';
import './css/App.css';
import './css/Header.css';
import './css/Home.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={require("./images/header-logo.png")} className="header-logo" alt="Noisserpmo logo" />
        <div className="header-navigation">
          <button>Home</button>
          <button>Projects</button>
          <button>Our Team</button>
        </div>
        <p className="header-time">2023/10/5</p>
      </header>
      <section className="home-page">
        <img src={require("./images/home-bg.gif")} alt="Homepage background" />
      </section>
      <Intropage/>
      <Workpage/>
    </div>
  );
}

export default App;
