import { useState } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';


export default function App() {
    const [to, setTo] = useState(contacts[0]);

    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat key={to.email} contact={to} />        
        </>
    );
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];