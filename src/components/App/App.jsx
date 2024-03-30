import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { lazy } from "react";
import { refreshUser } from "../../redux/auth/operations.js";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("../pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("../pages/ContactsPage/ContactsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      {/* <h1>Phonebook</h1> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
