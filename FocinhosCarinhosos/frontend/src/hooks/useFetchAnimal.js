import { useState, useEffect } from 'react';
import api from '../configApi/api.js';

const useFetchAnimal = () => {
  const [animal, setAnimal] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAnimalByType = async (tipo) => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get(`/Animais/tipo/${tipo}`);
      setAnimal(response.data);
    } catch (err) {
      setError('Erro ao buscar o animal por tipo.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAnimalById = async (id) => {
    setLoading(true);
    try {
      const response = await api.get(`/Animais/${id}`);
      setAnimal(response.data);
    } catch (err) {
      setError('Erro ao buscar o animal por ID.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      setAnimal(null);
      setError('');
    };
  }, []);

  return {
    animal,
    error,
    loading, 
    fetchAnimalByType,
    fetchAnimalById,
  };
};

export default useFetchAnimal;
