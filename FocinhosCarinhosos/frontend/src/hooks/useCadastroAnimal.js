import { useState } from "react";
import api from '../configApi/api.js';

const useCadastroAnimal = () => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const cadastrarAnimal = async (animalData) => {
    try {
      const response = await api.post('/Animais', animalData);
      console.log("Resposta da API:", response); 
      if (response.status === 201) {
        console.log("Cadastro de animal bem-sucedido!"); 
        setModalSuccess(true);
        setErrorMessage(""); 
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
    setErrorMessage(""); 
  };

  return {
    cadastrarAnimal,
    setModalError,
    closeModalSuccess,
    setModalSuccess,
    closeModalError,
    errorMessage,
    modalError,
    modalSuccess
  };
};

export default useCadastroAnimal;
