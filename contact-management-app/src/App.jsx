import React, { useState } from 'react';
import ContactContext from './context/ContactContext';
import ContactList from './component/ContactList';
import ContactDetails from './component/ContactDetails';


function App() {
  const [contacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
        <ContactList />
        <ContactDetails />
    </ContactContext.Provider>
  );
}

export default App;



