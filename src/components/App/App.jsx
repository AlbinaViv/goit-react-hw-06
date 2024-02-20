import { useEffect, useState } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";

export const App = () => {
  const [inputValue, setInputValue] = useState("");

  // const filteredContacts = contacts.filter((contacts) =>
  //   contacts.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // state.name =  payload;

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <SearchBox
        value={inputValue}
        onChange={setInputValue}
      />

      <ContactList />
    </>
  );
};

export default App;
