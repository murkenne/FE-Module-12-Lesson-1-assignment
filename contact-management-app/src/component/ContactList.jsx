import { useContext } from 'react';
import ContactContext from '../context/ContactContext'; 
import { Container, Row, Col, Card } from 'react-bootstrap';

function ContactList() {
  const { contacts, setSelectedContact } = useContext(ContactContext);
  
  const handleSelectedContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <Container className="mt-4 pr-4">
      <h1 className='mb-3'> Contact Management App</h1>   
      <h2 className="mb-4 justify-content align-items-center">Contact List</h2>
      <Row>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <Col key={contact.id} md={4} sm={6} xs={12} className="mb-3">
              <Card
                onClick={() => handleSelectedContact(contact)}
                style={{ cursor: 'pointer' }}
                className="shadow-sm"
              >
                <Card.Body>
                  <Card.Title>{contact.name}</Card.Title>
                  <Card.Text>{contact.email}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-muted text-center">No contacts available</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ContactList;

