import { useState } from 'react';
import api from '../configApi/api.js';

const useFetchAnimal = () => {
  const [animal, setAnimal] = useState(null);
  const [error, setError] = useState('');

  const fetchAnimalByName = async (nome) => {
    try {
      const response = await api.get(`/Animais/nome/${nome}`);
      setAnimal(response.data);
    } catch (err) {
      setError('Erro ao buscar o animal por nome.');
    }
  };

  const fetchAnimalByType = async (tipo) => {
    try {
      const response = await api.get(`/Animais/tipo/${tipo}`);
      setAnimal(response.data);
    } catch (err) {
      setError('Erro ao buscar o animal por tipo.');
    }
  };

  const fetchAnimalByTypeAndName = async (tipo, nome) => {
    try {
      const response = await api.get(`/Animais/tipo/${tipo}/nome/${nome}`);
      setAnimal(response.data);
    } catch (err) {
      setError('Erro ao buscar o animal por tipo e nome.');
    }
  };

  return {
    animal,
    error,
    fetchAnimalByName,
    fetchAnimalByType,
    fetchAnimalByTypeAndName,
  };
};

export default useFetchAnimal;
