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
          <Dictionary defaultKeyword="peace" />
        </main>
        <footer className="footer">
          <small>Coded by Olesia Lohachova</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
