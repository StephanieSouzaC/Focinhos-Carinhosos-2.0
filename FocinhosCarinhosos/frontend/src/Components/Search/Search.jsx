// import React, { useState } from 'react';
// import { Form, Button, Row, Col, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import useFetchAnimal from '../../hooks/useFetchAnimal.js';
// import './Search.css';

// function Search() {
//   const [nome, setNome] = useState('');
//   const [tipo, setTipo] = useState('');
//   const [showCard, setShowCard] = useState(false);
//   const { animal, error, fetchAnimalByName, fetchAnimalByType, fetchAnimalByTypeAndName } = useFetchAnimal();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setShowCard(false);

//     if (nome && tipo) {
//       await fetchAnimalByTypeAndName(tipo, nome);
//     } else if (nome) {
//       await fetchAnimalByName(nome);
//     } else if (tipo) {
//       await fetchAnimalByType(tipo);
//     }

//     if (animal) {
//       setShowCard(true);
//     }
//   };

//   const handleAlterarClick = (id) => {
//     navigate(`/alterar-animal/${id}`);
//   };

//   return (
//     <div className="search__animal-container">
//       <h1 className="search__animal-title">Buscar Animais</h1>
//       <Form onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Col xs={12} md={6}>
//             <Form.Group controlId="formNome">
//               <Form.Label>Nome</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Digite o nome"
//                 value={nome}
//                 onChange={(e) => setNome(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//           <Col xs={12} md={6}>
//             <Form.Group controlId="formTipo">
//               <Form.Label>Tipo</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={tipo}
//                 onChange={(e) => setTipo(e.target.value)}
//               >
//                 <option value="" disabled>Selecione o tipo de animal</option>
//                 <option value="cachorro">Cachorro</option>
//                 <option value="gato">Gato</option>
//               </Form.Control>
//             </Form.Group>
//           </Col>
//         </Row>
//         {error && <p className="text-danger">{error}</p>}
//         <div className="text-center">
//           <Button variant="dark" type="submit" className="search__btn">
//             Buscar
//           </Button>
//         </div>
//       </Form>

//       {showCard && animal && (
//         <div className="animal-card-container">
//           <Card className="animal-card">
//             <Row noGutters>
//               <Col xs={12} md={5}>
//                 <Card.Img
//                   variant="top"
//                   src={animal.linkImg || "https://via.placeholder.com/150"}
//                   alt="Imagem do Animal"
//                 />
//               </Col>
//               <Col xs={12} md={7} className="p-3">
//                 <Card.Body>
//                   <Card.Text><strong>Nome:</strong> {animal.nome}</Card.Text>
//                   <Card.Text><strong>Tipo:</strong> {animal.tipo}</Card.Text>
//                   <Card.Text><strong>Idade:</strong> {animal.idade}</Card.Text>
//                   <Card.Text><strong>Porte:</strong> {animal.porte}</Card.Text>
//                   <Card.Text><strong>Cor:</strong> {animal.cor}</Card.Text>
//                   <Card.Text><strong>Observação:</strong> {animal.observacao}</Card.Text>
//                   <Card.Text><strong>Cadastro:</strong> {animal.ativo ? 'Ativo' : 'Inativo'}</Card.Text>
//                   <Button variant="dark" onClick={() => handleAlterarClick(animal.id)}>Alterar</Button>
//                 </Card.Body>
//               </Col>
//             </Row>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;

import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFetchAnimal from '../../hooks/useFetchAnimal.js';
import './Search.css';

function Search() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para o modal de erro
  const { animal, error, fetchAnimalByName, fetchAnimalByType, fetchAnimalByTypeAndName } = useFetchAnimal();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowCard(false);
    setShowErrorModal(false); // Redefine o estado do modal de erro

    // Realiza a busca baseada no nome e/ou tipo
    if (nome && tipo) {
      await fetchAnimalByTypeAndName(tipo, nome);
    } else if (nome) {
      await fetchAnimalByName(nome);
    } else if (tipo) {
      await fetchAnimalByType(tipo);
    }

    // Verifica se o animal foi encontrado
    if (animal && animal.length > 0) {
      setShowCard(true);
    } else {
      setShowErrorModal(true); // Exibe o modal de erro se não houver animal
    }
  };

  const handleCloseModal = () => {
    setShowErrorModal(false); // Fecha o modal ao clicar fora ou no botão
  };

  const handleAlterarClick = (id) => {
    navigate(`/alterar-animal/${id}`);
  };

  return (
    <div className="search__animal-container">
      <h1 className="search__animal-title">Buscar Animais</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formTipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Selecione o tipo de animal (opcional)</option>
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

      {/* Exibe os cartões dos animais encontrados */}
      {showCard && animal && animal.length > 0 && (
        <div className="animal-card-container">
          {animal.map((a) => (
            <Card key={a.id} className="animal-card">
              <Row noGutters>
                <Col xs={12} md={5}>
                  <Card.Img
                    variant="top"
                    src={a.linkImg || "https://via.placeholder.com/150"}
                    alt="Imagem do Animal"
                  />
                </Col>
                <Col xs={12} md={7} className="p-3">
                  <Card.Body>
                    <Card.Text><strong>Nome:</strong> {a.nome}</Card.Text>
                    <Card.Text><strong>Tipo:</strong> {a.tipo}</Card.Text>
                    <Card.Text><strong>Idade:</strong> {a.idade}</Card.Text>
                    <Card.Text><strong>Porte:</strong> {a.porte}</Card.Text>
                    <Card.Text><strong>Cor:</strong> {a.cor}</Card.Text>
                    <Card.Text><strong>Observação:</strong> {a.observacao}</Card.Text>
                    <Card.Text><strong>Cadastro:</strong> {a.ativo ? 'Ativo' : 'Inativo'}</Card.Text>
                    <Button variant="dark" onClick={() => handleAlterarClick(a.id)}>Alterar</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      )}

      {/* Modal de erro para animais não encontrados */}
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



// import React, { useState } from 'react';
// import { Form, Button, Row, Col, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Search.css';

// function Search() {
//   const [showCard, setShowCard] = useState(false);
//   const navigate = useNavigate(); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowCard(true); 
//   };

//   const handleAlterarClick = (id) => {
//     navigate(`/alterar-animal/${id}`); 
//   };

//   return (
//     <div className="search__animal-container">
//       <h1 className="search__animal-title">Buscar Animais</h1>
//       <Form onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Col xs={12} md={6}>
//             <Form.Group controlId="formNome">
//               <Form.Label>Nome</Form.Label>
//               <Form.Control type="text" placeholder="Digite o nome" />
//             </Form.Group>
//           </Col>
//           <Col xs={12} md={6}>
//             <Form.Group controlId="formTipo">
//               <Form.Label>Tipo</Form.Label>
//               <Form.Control as="select">
//                 <option value="" disabled selected>Selecione o tipo de animal</option>
//                 <option value="cachorro">Cachorro</option>
//                 <option value="gato">Gato</option>
//               </Form.Control>
//             </Form.Group>
//           </Col>
//         </Row>
//         <div className="text-center">
//           <Button variant="dark" type="submit" className="search__btn">
//             Buscar
//           </Button>
//         </div>
//       </Form>

//       {showCard && (
//         <div className="animal-card-container">
//           <Card className="animal-card">
//             <Row noGutters>
//               <Col xs={12} md={5}>
//                 <Card.Img
//                   variant="top"
//                   src="https://via.placeholder.com/150"
//                   alt="Imagem do Animal"
//                 />
//               </Col>
//               <Col xs={12} md={7} className="p-3">
//                 <Card.Body>
//                   <Card.Text><strong>Nome:</strong> Chico</Card.Text>
//                   <Card.Text><strong>Tipo:</strong> Gato</Card.Text>
//                   <Card.Text><strong>Cadastro:</strong> Ativo</Card.Text>
//                   <Card.Text><strong>Idade:</strong> 2 anos</Card.Text>
//                   <Card.Text><strong>Cor:</strong> Frajola</Card.Text>
//                   <Button variant="dark" onClick={() => handleAlterarClick(1)}>Alterar</Button> 
//                 </Card.Body>
//               </Col>
//             </Row>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;

