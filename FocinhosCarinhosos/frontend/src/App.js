import './App.css';
import Header from './Components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAnimal from './Components/FormRegistrationAnimal/FormAnimal.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
        <FormAnimal/>
    </div>
  );
}

export default App;
