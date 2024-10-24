import React, { useState, useEffect } from "react";
import "./FormAnimal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap"; 
import useCadastroAnimal from "../../hooks/useCadastroAnimal.js"; 

const FormAnimal = () => {
  const [animalData, setAnimalData] = useState({
    nome: "",
    tipo: "",
    idade: "",
    porte: "",
    cor: "",
    linkImg: "",
    observacao: "",
    ativo: false,
  });

  const {
    cadastrarAnimal,
    closeModalSuccess,
    closeModalError,
    errorMessage,
    modalError,
    modalSuccess
  } = useCadastroAnimal();

  useEffect(() => {
    console.log("modalSuccess state:", modalSuccess);
  }, [modalSuccess]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnimalData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await cadastrarAnimal(animalData);
    setAnimalData({
      nome: "",
      tipo: "",
      idade: "",
      porte: "",
      cor: "",
      linkImg: "",
      observacao: "",
      ativo: false,
    });
  };

  return (
    <div className="form__register-animal-container">
      <form onSubmit={handleSubmit} className="form__register-animal">
        <h2 className="form__register-animal-title">Cadastrar Animais</h2>
        <div className="form__register-animal-group">
          <label htmlFor="nome" className="form__register-animal-group-label">Nome*</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="form__register-animal-control"
            placeholder="Ex: Chico"
            required
            onChange={handleChange}
            value={animalData.nome}
          />
        </div>

        <div className="row">
          <div className="col-md-6 form__register-animal-group">
            <label htmlFor="tipo" className="form__register-animal-group-label">Tipo*</label>
            <select
              id="tipo"
              name="tipo"
              className="form__register-animal-control"
              required
              onChange={handleChange}
              value={animalData.tipo}
            >
              <option value="" disabled>Selecione o tipo de animal</option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
          </div>

          <div className="col-md-6 form__register-animal-group">
            <label htmlFor="idade" className="form__register-animal-group-label">Idade*</label>
            <input
              type="number"
              id="idade"
              name="idade"
              className="form__register-animal-control"
              placeholder="Ex: 2"
              min="0"
              max="30"
              required
              onChange={handleChange}
              value={animalData.idade}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 form__register-animal-group">
            <label htmlFor="porte" className="form__register-animal-group-label">Porte*</label>
            <input
              type="text"
              id="porte"
              name="porte"
              className="form__register-animal-control"
              placeholder="Ex: grande"
              required
              onChange={handleChange}
              value={animalData.porte}
            />
          </div>

          <div className="col-md-6 form__register-animal-group">
            <label htmlFor="cor" className="form__register-animal-group-label">Cor*</label>
            <input
              type="text"
              id="cor"
              name="cor"
              className="form__register-animal-control"
              placeholder="Ex: preto"
              required
              onChange={handleChange}
              value={animalData.cor}
            />
          </div>
        </div>

        <div className="form__register-animal-group">
          <label htmlFor="linkImg" className="form__register-animal-group-label">Link da Imagem*</label>
          <input
            type="url"
            id="linkImg"
            name="linkImg"
            className="form__register-animal-control"
            placeholder="Ex: https://exemplo.com.br"
            required
            onChange={handleChange}
            value={animalData.linkImg}
          />
        </div>

        <div className="form__register-animal-group">
          <label htmlFor="observacao" className="form__register-animal-group-label">Observações*</label>
          <textarea
            id="observacao"
            name="observacao"
            className="form__register-animal-control"
            placeholder="Ex: dorminhoco e companheiro"
            required
            onChange={handleChange}
            value={animalData.observacao}
          />
        </div>

        <div className="form__register-animal-group form__register-animal-check">
          <input
            type="checkbox"
            id="ativo"
            name="ativo"
            className="form-check-input"
            checked={animalData.ativo}
            onChange={handleChange}
          />
          <label htmlFor="ativo" className="form__register-animal-check-label form__register-animal-group-label">
            Ativação de Cadastro*
          </label>
        </div>

        <button type="submit" className="btn-submit form__register-animal-btn-submit">
          Cadastrar
        </button>
      </form>

      <Modal show={modalSuccess} onHide={closeModalSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Animal cadastrado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalSuccess}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalError} onHide={closeModalError}>
        <Modal.Header closeButton>
          <Modal.Title>Erro!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeModalError}>
            Tentar novamente
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormAnimal;
