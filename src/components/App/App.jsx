import { useEffect, useState } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import css from "./App.module.css";

// import contact from "/src/contact.json";

export const App = () => {
  const contactsState = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contactsState;
  });

  const filteredContacts = contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const addContact = (newContact) => {
    console.log(newContact);

    setContacts((prevContacts) => {
      return [
        ...prevContacts,
        {
          id: Date.now(),
          ...newContact,
        },
      ];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("contacts");
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return initState;
  // });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <SearchBox
        value={inputValue}
        onChange={setInputValue}
      />

      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContacts}
      />
    </>
  );
};

export default App;
