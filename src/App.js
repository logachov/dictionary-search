import logo from './logo-fox.png';
import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="logo img-fluid" alt="logo" />

        <Dictionary />
      </div>


    </div>
  );
}

export default App;
