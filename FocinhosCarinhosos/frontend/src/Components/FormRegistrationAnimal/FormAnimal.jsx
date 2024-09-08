import React, { useState } from "react";
import "./FormAnimal.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FormAnimal = () => {
  const [atencao, setAtencao] = useState(false);

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

        <div className="form__register-animal-group form-check">
          <input
            type="checkbox"
            id="atencao"
            className="form-check-input"
            checked={atencao}
            onChange={() => setAtencao(!atencao)}
          />
          <label htmlFor="atencao" className="form-check-label form__register-animal-group-label">
            Ativação de Cadastro*
          </label>
        </div>

        <button type="submit" className="btn-submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormAnimal;

// import React, { useState } from "react";
// import "./FormAnimal.css"; 
// import "bootstrap/dist/css/bootstrap.min.css"; 

// const FormAnimal = () => {
//   const [atencao, setAtencao] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
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
//             className="form__register-animal-control"
//             placeholder="Ex: Chico"
//             required
//           />
//         </div>

//         <div className="row">
//           <div className="col-md-6 form__register-animal-group ">
//             <label htmlFor="tipo" className="form__register-animal-group-label">Tipo*</label>
//             <select id="tipo" className="form__register-animal-control" required>
//               <option value="" disabled selected>Selecione o tipo de animal</option>
//               <option value="cachorro">Cachorro</option>
//               <option value="gato">Gato</option>
//             </select>
//           </div>

//           <div className="col-md-6 form__register-animal-group ">
//             <label htmlFor="number" className="form__register-animal-group-label">Idade*</label>
//             <input
//               type="text"
//               id="idade"
//               className="form__register-animal-control"
//               placeholder="Ex: 2"
//               required
//             />
//           </div>
//         </div>

//         <div className="form__register-animal-group ">
//           <label htmlFor="imagem" className="form__register-animal-group-label">Link da Imagem*</label>
//           <input
//             type="url"
//             id="imagem"
//             className="form__register-animal-control"
//             placeholder="Ex: https://exemplo.com.br"
//             required
//           />
//         </div>

//         <div className="form__register-animal-group form-check">
//           <input
//             type="checkbox"
//             id="atencao"
//             className="form-check-input"
//             checked={atencao}
//             onChange={() => setAtencao(!atencao)}
//           />
//           <label htmlFor="atencao" className="form-check-label form__register-animal-group-label">
//             Ativação de Cadastro*
//           </label>
//         </div>

//         <button type="submit" className="btn-submit">
//           Cadastrar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormAnimal;