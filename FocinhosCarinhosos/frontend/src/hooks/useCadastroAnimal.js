// // useCadastroAnimal.js
// import { useState } from "react";
// import api from '../configApi/api.js';

// // useCadastroAnimal.js
// const useCadastroAnimal = () => {
//     const [modalSuccess, setModalSuccess] = useState(false);
//     const [modalError, setModalError] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
  
//     const cadastrarAnimal = async (animalData) => {
//       try {
//         const response = await api.post('/Animais', animalData);
//         if (response.status === 201) {
//           setModalSuccess(true);
//         }
//       } catch (error) {
//         console.log("Erro capturado:", error);
//         if (error.response) {
//           setErrorMessage(`${error.response.data.message} - falha ao cadastrar o animal.`);
//         } else {
//           setErrorMessage("Erro de conexão com a API. Verifique se a API está rodando.");
//         }
//         setModalError(true);
//         console.log("Estado modalError:", true);
//       }
//     };
  
//     const closeModalSuccess = () => {
//       setModalSuccess(false);
//       setErrorMessage(""); // Limpar a mensagem de erro
//     };
  
//     const closeModalError = () => {
//       setModalError(false);
//       setErrorMessage(""); // Limpar a mensagem de erro
//     };
  
//     return {
//       cadastrarAnimal,
//       modalSuccess,
//       closeModalSuccess,
//       modalError,
//       closeModalError,
//       errorMessage,
//     };
//   };
  

// export default useCadastroAnimal;



import { useState } from "react";
import api from '../configApi/api.js';

const useCadastroAnimal = () => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const cadastrarAnimal = async (animalData) => {
    try {
      const response = await api.post('/Animais', animalData);
      console.log("Resposta da API:", response); // Adicione esta linha
      if (response.status === 201) {
        console.log("Cadastro de animal bem-sucedido!"); // Adicione esta linha
        setModalSuccess(true);
        setErrorMessage(""); // Resetar mensagem de erro
      }
    } catch (error) {
      console.log("Erro capturado:", error);
      if (error.response) {
        setErrorMessage(`${error.response.data.message} - falha ao cadastrar o animal.`);
      } else {
        setErrorMessage("Erro de conexão com a API. Verifique se a API está rodando.");
      }
      setModalError(true);
      console.log("Estado modalError:", true);
    }
  };
  

  const closeModalSuccess = () => {
    setModalSuccess(false);
  };

  const closeModalError = () => {
    setModalError(false);
    setErrorMessage(""); // Limpar a mensagem de erro ao fechar o modal de erro
  };

  return {
    cadastrarAnimal,
    modalSuccess,
    closeModalSuccess,
    modalError,
    closeModalError,
    errorMessage,
  };
};

export default useCadastroAnimal;
