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
