import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactsList.module.css";
import { selectVisibleContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
