import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../ContactForm/ContactForm";
import ContactList from "../../ContactList/ContactList";
import SearchBox from "../../SearchBox/SearchBox";
import { selectLoading } from "../../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../../redux/contacts/contactsOps";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      Your contacts
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <ContactList />
    </>
  );
}
