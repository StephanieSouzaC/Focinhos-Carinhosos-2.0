import './App.css';
import Header from './Components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAnimal from './Components/FormRegistrationAnimal/FormAnimal.jsx';
import FormChangeAnimal from './Components/FormChangeAnimal/FormChangeAnimal.jsx';
import Search from './Components/Search/Search.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
        <FormAnimal/>
        <FormChangeAnimal />
        <Search/>
    </div>
  );
}

export default App;
