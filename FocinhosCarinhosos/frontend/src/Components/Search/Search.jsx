import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFetchAnimal from '../../hooks/useFetchAnimal.js';
import './Search.css';

function Search() {
  const [tipo, setTipo] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); 
  const { animal, error, fetchAnimalByType } = useFetchAnimal();
  const navigate = useNavigate();

  useEffect(() => {
    if (animal && animal.length > 0) {
      setShowCard(true);
      setShowErrorModal(false);
    } else if (error) {
      setShowErrorModal(true);
      setShowCard(false);
    }
  }, [animal, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowCard(false);
    setShowErrorModal(false);

    try {
      if (tipo) {
        await fetchAnimalByType(tipo);
      }
    } catch (err) {
      console.error('Erro na busca:', err);
      setShowErrorModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowErrorModal(false);
  };

  const handleAlterarClick = (_id) => {
    navigate(`/alterar-animal/${_id}`);
  };

  return (
    <div className="search__animal-container">
      <h1 className="search__animal-title">Buscar Animais</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center mb-3">
          <Col xs={12} md={9} className="d-flex justify-content-center">
            <Form.Group controlId="formTipo" className="w-75">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Selecione o tipo de animal</option>
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="dark" type="submit" className="search__btn">
            Buscar
          </Button>
        </div>
      </Form>

      {showCard && animal && animal.length > 0 && (
        <div className="animal-card-container">
          {animal.map((a) => (
            <Card key={a._id} className="animal-card">
              <Card.Img
                variant="top"
                src={a.linkImg}
                alt="Imagem do Animal"
              />
              <Card.Body>
                <Card.Text><strong>Id:</strong> {a._id}</Card.Text>
                <Card.Text><strong>Nome:</strong> {a.nome}</Card.Text>
                <Card.Text><strong>Tipo:</strong> {a.tipo}</Card.Text>
                <Card.Text><strong>Idade:</strong> {a.idade}</Card.Text>
                <Card.Text><strong>Porte:</strong> {a.porte}</Card.Text>
                <Card.Text><strong>Cor:</strong> {a.cor}</Card.Text>
                <Card.Text><strong>Observação:</strong> {a.observacao}</Card.Text>
                <Card.Text><strong>Cadastro:</strong> {a.ativo ? 'Ativo' : 'Inativo'}</Card.Text>
                <Button variant="dark" onClick={() => handleAlterarClick(a._id)}>Alterar</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      <Modal show={showErrorModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Nenhum animal encontrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Não encontramos nenhum animal com os filtros aplicados.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tentar novamente
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Search;

