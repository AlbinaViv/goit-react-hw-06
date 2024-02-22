import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts } from "../../redux/contacts/contacts.selectors";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
};
