import React, { useState } from "react";
import "./FormAnimal.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

const FormAnimal = () => {
  const [atencao, setAtencao] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cadastro-animal-container">
      <form onSubmit={handleSubmit} className="form-animal">
        <h2 className="titulo-form">Cadastrar de Animais</h2>

        <div className="form-group">
          <label htmlFor="nome">Nome*</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            placeholder="Ex: Chico"
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="tipo">Tipo*</label>
            <select id="tipo" className="form-control" required>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
          </div>

          <div className="col-md-6 form-group">
            <label htmlFor="idade">Idade*</label>
            <input
              type="text"
              id="idade"
              className="form-control"
              placeholder="Ex: 2"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="imagem">Link da Imagem*</label>
          <input
            type="url"
            id="imagem"
            className="form-control"
            placeholder="Ex: https://exemplo.com.br"
            required
          />
        </div>

        <div className="form-group form-check">
          <label htmlFor="atencao">Atenção de Cadastro*</label>
          <input
            type="checkbox"
            id="atencao"
            className="form-check-input"
            checked={atencao}
            onChange={() => setAtencao(!atencao)}
          />
        </div>

        <button type="submit" className="btn-submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormAnimal;
