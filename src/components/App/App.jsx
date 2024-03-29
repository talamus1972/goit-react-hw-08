// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from "../ContactForm/ContactForm";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/contactsOps";
// import toast, { Toaster } from "react-hot-toast";
// import { selectError, selectLoading } from "../../redux/contacts/selectors";
// import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'));

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts())
  //     .unwrap()
  //     .then(() => {
  //       toast.success("fetchContact fulfilled");
  //     })
  //     .catch(() => {
  //       toast.error("fetchContact rejected");
  //     });
  // }, [dispatch]);

  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  return (
    <div>
    
      {/* <h1>Phonebook</h1> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>

      {/* <ContactForm />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <SearchBox />
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}
