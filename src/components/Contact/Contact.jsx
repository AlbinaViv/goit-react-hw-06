import css from "./Contact.module.css";
import { CgGirl } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Contact = ({ name, number, deleteHandler, id }) => {
  return (
    <li className={css.contact}>
      <p className={css.content}>
        <CgGirl />
        {name}
      </p>
      <p className={css.content}>
        <BsFillTelephoneFill />
        {number}
      </p>
      <button
        onClick={() => deleteHandler(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
