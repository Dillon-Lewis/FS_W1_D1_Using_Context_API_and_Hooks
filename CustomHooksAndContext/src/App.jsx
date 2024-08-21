import { useState } from 'react'
import { ContactProvider } from './context/ContactProvider'
import ContactList from './views/ContactList'




const App = ()  => {

  const [contact, setContact] = useState({
    id: '',
    name: '',
    email: ''
  }) 



  return (
    <ContactProvider>
      <ContactList/>
    </ContactProvider>
  )
}

export default App
