import React from 'react';
import { Parent } from './components/Parent.jsx';
import { Container } from 'react-bootstrap';
import './style.css';

export default function App() {
  return (
    <Container>
      <h2>Child to Parent</h2>
      <Parent />
    </Container>
  );
}
