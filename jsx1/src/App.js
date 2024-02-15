// App.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Product from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "John"; // Changez le prénom selon votre besoin

function App() {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
            <Image />
          </Card.Text>
        </Card.Body>
      </Card>
      <p>Bonjour, {firstName ? firstName : 'là'} !</p>
      {firstName && <img src="votre_image.png" alt="Votre image" />}
    </Container>
  );
}

export default App;
