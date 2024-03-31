import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { lazy } from "react";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const Registration = lazy(() =>
  import("../../pages/Registration/Registration.jsx")
);
const Login = lazy(() => import("../../pages/Login/Login.jsx"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/register" />
            }
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<Registration />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<Login />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
