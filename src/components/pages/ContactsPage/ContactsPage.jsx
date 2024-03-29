import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../ContactForm/ContactForm";
import ContactList from "../../ContactList/ContactList";
import SearchBox from "../../SearchBox/SearchBox";
import { selectError, selectLoading } from "../../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../../redux/contacts/operations";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      Your contacts
      <ContactForm />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <SearchBox />
      <ContactList />
    </>
  );
}
