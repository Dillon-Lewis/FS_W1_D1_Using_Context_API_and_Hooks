import React, { createContext, useState } from 'react'

const ContactContext = createContext({
    contact:{
        id: '',
        name: '',
        email: ''
    },

    setContact: () => {}
}) 

const ContactProvider=({children}) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Danny Phantom",
      email: 'imaghost@gmail.com'
    },
    {
      id:2,
      name: 'Arnold Palmer',
      email: 'teaandlemonade@yahoo.com'
    },
    {
      id:3,
      name: 'Chicken Joe',
      email: 'surfingwavesdude@aol.com'
    }
  ])

  const [selectContact, setSelectContact] = useState()


  return (
    <ContactContext.Provider value={{contacts, selectContact, setSelectContact}}>
      {children}
    </ContactContext.Provider> 

    )

}


export {ContactContext, ContactProvider} 