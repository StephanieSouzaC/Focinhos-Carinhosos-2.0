// import './App.css';
// import Header from './Components/Header/Header.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import FormAnimal from './Components/FormRegistrationAnimal/FormAnimal.jsx';
// import FormChangeAnimal from './Components/FormChangeAnimal/FormChangeAnimal.jsx';
// import Search from './Components/Search/Search.jsx';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header></Header>
//       </header>
//         <FormAnimal/>
//         <FormChangeAnimal />
//         <Search/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import FormAnimal from './Components/FormRegistrationAnimal/FormAnimal';
import FormChangeAnimal from './Components/FormChangeAnimal/FormChangeAnimal';
import Search from './Components/Search/Search';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página de carregamento padrão após o login */}
        <Route path="/" element={<Navigate to="/cadastro-animal" />} />

        {/* Rotas para cadastro de animais */}
        <Route path="/cadastro-animal" element={<FormAnimal />} />

        {/* Rotas para buscar animais */}
        <Route path="/buscar-animal" element={<Search />} />

        {/* Rotas para alterar cadastro de animais (apenas após clicar no botão de alterar) */}
        <Route path="/alterar-animal/:id" element={<FormChangeAnimal />} />
      </Routes>
    </Router>
  );
}

export default App;
