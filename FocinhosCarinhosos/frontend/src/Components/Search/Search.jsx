// import React from 'react';
// import { Form, Button, Row, Col } from 'react-bootstrap';
// import './Search.css';

// function Search() {
//   return (
//     <div className="search__animal-container">
//       <h1 className="search__animal-title">Buscar Animais</h1>
//       <Form>
//         <Row className="mb-3">
//           <Col>
//             <Form.Group controlId="formNome">
//               <Form.Label>Nome</Form.Label>
//               <Form.Control type="text" placeholder="Digite o nome" />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="formTipo">
//               <Form.Label>Tipo</Form.Label>
//               <Form.Control as="select">
//                 <option>Selecione o tipo</option>
//                 <option>Cachorro</option>
//                 <option>Gato</option>
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
//     </div>
//   );
// }

// export default Search;

// import React, { useState } from 'react';
// import { Form, Button, Row, Col, Card } from 'react-bootstrap';
// import './Search.css';

// function Search() {
//   const [showCard, setShowCard] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowCard(true);  // Exibe o card ao clicar em buscar
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
//               <Form.Control as="select" className="custom-select">
//                 <option>Selecione o tipo</option>
//                 <option>Cachorro</option>
//                 <option>Gato</option>
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
//             <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Animal Image" />
//             <Card.Body>
//               <Card.Title>Nome do Animal</Card.Title>
//               <Card.Text>
//                 <strong>Tipo:</strong> Cachorro <br />
//                 <strong>Idade:</strong> 2 anos <br />
//                 <strong>Raça:</strong> Labrador <br />
//                 <strong>Disponível para adoção</strong>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;


import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import './Search.css';

function Search() {
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true); // Mostra o card ao clicar em "Buscar"
  };

  return (
    <div className="search__animal-container">
      <h1 className="search__animal-title">Buscar Animais</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formTipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control as="select">
                <option>Selecione o tipo</option>
                <option>Cachorro</option>
                <option>Gato</option>
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

      {/* Condicional para exibir o card */}
      {showCard && (
        <div className="animal-card-container">
          <Card className="animal-card">
            <Row noGutters>
              <Col xs={12} md={5}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Imagem do Animal"
                />
              </Col>
              <Col xs={12} md={7} className="p-3">
                <Card.Body>
                  <Card.Text><strong>Nome:</strong> Chico</Card.Text>
                  <Card.Text><strong>Tipo:</strong> Gato</Card.Text>
                  <Card.Text><strong>Cadastro:</strong> Ativo</Card.Text>
                  <Card.Text><strong>Idade:</strong> 2 anos</Card.Text>
                  <Card.Text><strong>Cor:</strong> Frajola</Card.Text>
                  <Button variant="dark">Alterar</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Search;
