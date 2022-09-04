import logo from './logo-fox.png';
import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img src={logo} className="logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="code" />
        </main>
        <footer className="footer">
          <p>Coded by Olesia Lohachova and is open-sourced on <a href='https://github.com/logachov/dictionary-search' target="_blank" rel='noreferrer'>GitHub</a> and hosted on <a href='https://unique-bienenstitch-d7dd0b.netlify.app/' target="_blank" rel='noreferrer'>Netlify</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
