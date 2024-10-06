import { useState, useEffect } from 'react';
import api from '../configApi/api.js';

const useFetchAnimal = () => {
  const [animal, setAnimal] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAnimalByName = async (nome) => {
    setLoading(true); // Inicia o carregamento
    setError(''); // Reseta o erro
    try {
      const response = await api.get(`/Animais/nome/${nome}`);
      setAnimal(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError('Erro ao buscar o animal por nome.');
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };
  
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
  
  const fetchAnimalByTypeAndName = async (tipo, nome) => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get(`/Animais/tipo/${tipo}/nome/${nome}`);
      setAnimal(response.data);
    } catch (err) {
      setError('Erro ao buscar o animal por tipo e nome.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAnimalById = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/animals/${id}`);
      const data = await response.json();
      setAnimal(data);
    } catch (err) {
      setError(err.message);
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
    fetchAnimalByName,
    fetchAnimalByType,
    fetchAnimalByTypeAndName,
    fetchAnimalById,
  };
};

export default useFetchAnimal;
