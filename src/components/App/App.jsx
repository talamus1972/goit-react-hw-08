import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import toast, {Toaster} from "react-hot-toast";
import { selectError, selectLoading } from "../../redux/contactsSlice";

export default function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts()).unwrap()
      .then(() => {
      toast.success("fetchContact fulfilled")
      }).catch(() => {
      toast.error("fetchContact rejected")
    })
  }, [dispatch])
  
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <SearchBox />
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}