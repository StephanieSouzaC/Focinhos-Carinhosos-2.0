import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <Footer></Footer>
    </div>
  );
}

export default App;
