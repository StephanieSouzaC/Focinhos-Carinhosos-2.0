import React, { useState, useEffect } from "react";
import useUpdateAnimal from "../../hooks/useUpdateAnimal"; 
import useFetchAnimal from "../../hooks/useFetchAnimal"; 
import { Modal, Button } from "react-bootstrap"; 
import "./FormChangeAnimal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

const FormChangeAnimal = () => {
  const { id } = useParams(); 
  const { animal, fetchAnimalById, loading: loadingFetch, error: errorFetch } = useFetchAnimal();
  const { updateAnimal, success, error, loading } = useUpdateAnimal();
  const [animalData, setAnimalData] = useState({
    nome: '',
    tipo: '',
    idade: '',
    porte: '',
    cor: '',
    linkImg: '',
    observacao: '',
    ativo: false,
  });
  const [showModal, setShowModal] = useState(false); 
  const [modalMessage, setModalMessage] = useState(""); 

  useEffect(() => {
    const fetchAnimal = async () => {
      if (id) {
        try {
          await fetchAnimalById(id);
        } catch (err) {
          console.error("Erro ao buscar dados do animal:", err);
        }
      }
    };

    fetchAnimal();
  }, [id]);

  useEffect(() => {
    if (animal) {
      setAnimalData({
        nome: animal.nome,
        tipo: animal.tipo,
        idade: animal.idade,
        porte: animal.porte,
        cor: animal.cor,
        linkImg: animal.linkImg,
        observacao: animal.observacao,
        ativo: animal.ativo,
      });
    }
  }, [animal]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnimalData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAnimal(id, animalData);
      setModalMessage("Cadastro atualizado com sucesso!"); 
    } catch (err) {
      setModalMessage("Erro ao atualizar cadastro: " + err.message); 
    } finally {
      setShowModal(true); 
    }
  };

  const handleCloseModal = () => setShowModal(false); 

  return (
    <div className="form__register-animal-container">
      <form onSubmit={handleSubmit} className="form__register-animal">
        <h2 className="form__register-animal-title">Atualizar cadastro de Animais</h2>

        {loadingFetch && <p>Carregando dados do animal...</p>}
        {errorFetch && <p>Erro ao carregar dados do animal: {errorFetch}</p>}

        <div className="form__register-animal-group">
          <label htmlFor="nome" className="form__register-animal-group-label">Nome*</label>
          <input
            type="text"
            id="nome"
            className="form__register-animal-control"
            name="nome"
            value={animalData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 form__register-animal-group">
            <label htmlFor="tipo" className="form__register-animal-group-label">Tipo*</label>
            <select
              id="tipo"
              className="form__register-animal-control"
              name="tipo"
              value={animalData.tipo}
              onChange={handleChange}
              required
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
              className="form__register-animal-control"
              name="idade"
              value={animalData.idade}
              onChange={handleChange}
              min="0"
              max="30"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 form__register-animal-group">
            <label htmlFor="porte" className="form__register-animal-group-label">Porte*</label>
            <input
              type="text"
              id="porte"
              className="form__register-animal-control"
              name="porte"
              value={animalData.porte}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 form__register-animal-group">
            <label htmlFor="cor" className="form__register-animal-group-label">Cor*</label>
            <input
              type="text"
              id="cor"
              className="form__register-animal-control"
              name="cor"
              value={animalData.cor}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form__register-animal-group">
          <label htmlFor="linkImg" className="form__register-animal-group-label">Link da Imagem*</label>
          <input
            type="url"
            id="linkImg"
            className="form__register-animal-control"
            name="linkImg"
            value={animalData.linkImg}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form__register-animal-group">
          <label htmlFor="observacao" className="form__register-animal-group-label">Observações*</label>
          <input
            type="text"
            id="observacao"
            className="form__register-animal-control"
            name="observacao"
            value={animalData.observacao}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form__register-animal-group form__register-animal-check">
          <input
            type="checkbox"
            id="ativo"
            className="form-check-input"
            name="ativo"
            checked={animalData.ativo}
            onChange={handleChange}
          />
          <label htmlFor="ativo" className="form__register-animal-check-label form__register-animal-group-label">
            Ativação de Cadastro*
          </label>
        </div>

        <button type="submit" className="btn-submit form__register-animal-btn-submit" disabled={loading}>
          {loading ? "Atualizando..." : "Atualizar"}
        </button>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{success ? "Sucesso" : "Erro"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormChangeAnimal;
