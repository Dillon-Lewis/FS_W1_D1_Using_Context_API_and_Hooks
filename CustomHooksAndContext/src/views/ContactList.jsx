import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ContactContext } from '../context/ContactProvider'

  
function ContactList() {

    function handleOnClick(contact) {
        setSelectContact(contact)

    }

    const {contacts, setSelectContact, selectContact} = useContext(ContactContext)

    const ContactData = contacts.map(contact =>
        <li key={contact.id} onClick={() => handleOnClick(contact)}>
            <p>{contact.name}</p>
        </li>
    )

  return (
    <Container>
        <h1>Contact List</h1>
        <ul>{ContactData}</ul>
        { selectContact && (
<li>{selectContact.email}</li>
)}
    </Container>
  )
}

export default ContactList