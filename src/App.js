import logo from './logo-fox.png';
import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">

      <img src={logo} className="logo img-fluid" alt="logo" />
      <div className="container">
        <Dictionary />
      </div>


    </div>
  );
}

export default App;
