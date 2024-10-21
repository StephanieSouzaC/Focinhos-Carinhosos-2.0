// import { useState } from "react";
// import api from '../configApi/api.js';

// const useUpdateAnimal = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const updateAnimal = async (animalId, animalData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       const response = await api.put(`/Animais/${animalId}`, animalData); 
//       if (response.status === 200) {
//         setSuccess(true);
//       }
//     } catch (err) {
//       setError(err.response ? err.response.data.message : "Erro ao atualizar o animal");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { updateAnimal, loading, error, success };
// };

// export default useUpdateAnimal;

import { useState } from "react";
import api from "../configApi/api"; 

const useUpdateAnimal = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateAnimal = async (id, animalData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await api.put(`/animais/${id}`, animalData);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateAnimal, loading, error, success };
};

export default useUpdateAnimal;
