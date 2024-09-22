import React, { useState } from "react";
import "./FormChangeAnimal.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FormChangeAnimal = () => {
  const [ativacao, setAtivacao] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form__register-animal-container">
      <form onSubmit={handleSubmit} className="form__register-animal">
        <h2 className="form__register-animal-title">Cadastrar de Animais</h2>

        <div className="form__register-animal-group">
          <label htmlFor="nome" className="form__register-animal-group-label">Nome*</label>
          <input
            type="text"
            id="nome"
            className="form__register-animal-control"
            placeholder="Ex: Chico"
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 form__register-animal-group ">
            <label htmlFor="tipo" className="form__register-animal-group-label">Tipo*</label>
            <select id="tipo" className="form__register-animal-control" required>
              <option value="" disabled selected>Selecione o tipo de animal</option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
          </div>

          <div className="col-md-6 form__register-animal-group ">
            <label htmlFor="idade" className="form__register-animal-group-label">Idade*</label>
            <input
              type="number"
              id="idade"
              className="form__register-animal-control"
              placeholder="Ex: 2"
              min="0"
              max="30"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 form__register-animal-group ">
            <label htmlFor="porte" className="form__register-animal-group-label">Porte*</label>
            <input
              type="text"
              id="porte"
              className="form__register-animal-control"
              placeholder="Ex: grande"
              required
            />
          </div>

          <div className="col-md-6 form__register-animal-group ">
          <label htmlFor="cor" className="form__register-animal-group-label">Cor*</label>
            <input
              type="text"
              id="cor"
              className="form__register-animal-control"
              placeholder="Ex: preto"
              required
            />
          </div>
          </div>

        <div className="form__register-animal-group ">
          <label htmlFor="imagem" className="form__register-animal-group-label">Link da Imagem*</label>
          <input
            type="url"
            id="imagem"
            className="form__register-animal-control"
            placeholder="Ex: https://exemplo.com.br"
            required
          />
        </div>

        <div className="form__register-animal-group ">
          <label htmlFor="observacao" className="form__register-animal-group-label">Observações*</label>
          <input
            type="text-area"
            id="observacao"
            className="form__register-animal-control"
            placeholder="Ex: dorminhoco e companheiro"
            required
          />
        </div>

        <div className="form__register-animal-group form__register-animal-check">
          <input
            type="checkbox"
            id="atencao"
            className="form-check-input"
            checked={ativacao}
            onChange={() => setAtivacao(!ativacao)}
          />
          <label htmlFor="ativacao" className="form__register-animal-check-label form__register-animal-group-label">
            Ativação de Cadastro*
          </label>
        </div>

        <button type="submit" className="btn-submit form__register-animal-btn-submit">
          Atualizar
        </button>
      </form>
    </div>
  );
};

export default FormChangeAnimal;
