import React, { useContext } from 'react';
import ContactContext from '../context/ContactContext';
import { Container, Card } from 'react-bootstrap';

function ContactDetails() {
  const { selectedContact } = useContext(ContactContext);

  if (!selectedContact) {
    return (
      <Container className="mt-4 text-center">
        <p className="text-muted">No contact selected. Click a contact to see details.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4 pr-4"> 
      <h2 className="mb-3 text-center">Contact Details</h2>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>{selectedContact.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {selectedContact.email}
          </Card.Text>
          <Card.Text>
            <strong>Phone:</strong> {selectedContact.phone || 'N/A'}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactDetails;

