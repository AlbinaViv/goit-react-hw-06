import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts } from "../../redux/contacts/contacts.selectors";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
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
