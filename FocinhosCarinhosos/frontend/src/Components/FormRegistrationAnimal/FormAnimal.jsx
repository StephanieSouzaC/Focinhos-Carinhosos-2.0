// import React, { useState } from "react";
// import "./FormAnimal.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import useCadastroAnimal from "../../hooks/useCadastroAnimal.js"; // Importando o hook

// const FormAnimal = () => {
//   const [animalData, setAnimalData] = useState({
//     nome: "",
//     tipo: "",
//     idade: "",
//     porte: "",
//     cor: "",
//     linkImg: "", // Altere de imagem para linkImg
//     observacao: "",
//     ativo: false, // Campo para controle do checkbox
//   });

//   const { cadastrarAnimal, modalSuccess, closeModalSuccess, modalError, closeModalError, errorMessage } = useCadastroAnimal();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     // Atualiza o estado para o checkbox 'ativo'
//     if (type === "checkbox") {
//       setAnimalData((prevData) => ({ ...prevData, [name]: checked }));
//     } else {
//       setAnimalData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submetendo animal:", animalData); // Adicione esta linha
//     cadastrarAnimal(animalData);
//   };
  

//   // Função para fechar o modal ao clicar fora
//   const handleModalClose = (e) => {
//     if (e.target.className.includes("modal")) {
//       closeModalError();
//     }
//   };

//   return (
//     <div className="form__register-animal-container">
//       <form onSubmit={handleSubmit} className="form__register-animal">
//         <h2 className="form__register-animal-title">Cadastrar de Animais</h2>

//         <div className="form__register-animal-group">
//           <label htmlFor="nome" className="form__register-animal-group-label">Nome*</label>
//           <input
//             type="text"
//             id="nome"
//             name="nome"
//             className="form__register-animal-control"
//             placeholder="Ex: Chico"
//             required
//             onChange={handleChange}
//           />
//         </div>

//         <div className="row">
//           <div className="col-md-6 form__register-animal-group">
//             <label htmlFor="tipo" className="form__register-animal-group-label">Tipo*</label>
//             <select
//               id="tipo"
//               name="tipo"
//               className="form__register-animal-control"
//               required
//               onChange={handleChange}
//             >
//               <option value="" disabled selected>Selecione o tipo de animal</option>
//               <option value="cachorro">Cachorro</option>
//               <option value="gato">Gato</option>
//             </select>
//           </div>

//           <div className="col-md-6 form__register-animal-group">
//             <label htmlFor="idade" className="form__register-animal-group-label">Idade*</label>
//             <input
//               type="number"
//               id="idade"
//               name="idade"
//               className="form__register-animal-control"
//               placeholder="Ex: 2"
//               min="0"
//               max="30"
//               required
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6 form__register-animal-group">
//             <label htmlFor="porte" className="form__register-animal-group-label">Porte*</label>
//             <input
//               type="text"
//               id="porte"
//               name="porte"
//               className="form__register-animal-control"
//               placeholder="Ex: grande"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           <div className="col-md-6 form__register-animal-group">
//             <label htmlFor="cor" className="form__register-animal-group-label">Cor*</label>
//             <input
//               type="text"
//               id="cor"
//               name="cor"
//               className="form__register-animal-control"
//               placeholder="Ex: preto"
//               required
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="form__register-animal-group">
//           <label htmlFor="linkImg" className="form__register-animal-group-label">Link da Imagem*</label>
//           <input
//             type="url"
//             id="linkImg"
//             name="linkImg" // Mude de 'imagem' para 'linkImg'
//             className="form__register-animal-control"
//             placeholder="Ex: https://exemplo.com.br"
//             required
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form__register-animal-group">
//           <label htmlFor="observacao" className="form__register-animal-group-label">Observações*</label>
//           <textarea
//             id="observacao"
//             name="observacao"
//             className="form__register-animal-control"
//             placeholder="Ex: dorminhoco e companheiro"
//             required
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form__register-animal-group form__register-animal-check">
//           <input
//             type="checkbox"
//             id="ativo"
//             name="ativo" // Use o mesmo nome no estado
//             className="form-check-input"
//             checked={animalData.ativo} // Use o estado para controlar o checkbox
//             onChange={handleChange}
//           />
//           <label htmlFor="ativo" className="form__register-animal-check-label form__register-animal-group-label">
//             Ativação de Cadastro*
//           </label>
//         </div>

//         <button type="submit" className="btn-submit form__register-animal-btn-submit">
//           Cadastrar
//         </button>
//       </form>

//       {/* Modal de Sucesso */}
//     {modalSuccess && (
//       <div className="modal">
//         <div className="modal-content">
//           <span className="close" onClick={closeModalSuccess}>&times;</span>
//           <h2>Sucesso!</h2>
//           <p>Animal cadastrado com sucesso!</p>
//         </div>
//       </div>
//     )}

//     {/* Modal de Erro */}
//     {modalError && (
//       <div className="modal" onClick={handleModalClose}>
//         <div className="modal-content">
//           <span className="close" onClick={closeModalError}>&times;</span>
//           <h2>Erro!</h2>
//           <p>{errorMessage}</p>
//           <button onClick={closeModalError}>Tentar novamente</button>
//         </div>
//       </div>
//     )}
//   </div>
// );
// };

// export default FormAnimal;

import React, { useState } from "react";
import "./FormAnimal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useCadastroAnimal from "../../hooks/useCadastroAnimal.js"; // Importando o hook

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

  const { cadastrarAnimal, modalSuccess, closeModalSuccess, modalError, closeModalError, errorMessage } = useCadastroAnimal();

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
  
    if (modalSuccess) {
      console.log("Modal de sucesso deve aparecer.");  // Adicione esta linha
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
    }
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

      {/* Modal de Sucesso */}
      {modalSuccess && (
        <div className="modal">
        <div className="modal-content">
          <h2>Sucesso!</h2>
          <p>Animal cadastrado com sucesso!</p>
          <button onClick={closeModalSuccess}>Fechar</button>
        </div>
      </div>
)}


      {/* Modal de Erro */}
      {modalError && (
        <div className="modal" onClick={closeModalError}>
          <div className="modal-content">
            <span className="close" onClick={closeModalError}>&times;</span>
            <h2>Erro!</h2>
            <p>{errorMessage}</p>
            <button onClick={closeModalError}>Tentar novamente</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormAnimal;

