import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { selectError, selectLoading } from "../../redux/auth/selectors.js";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import css from "./Login.module.css";

export default function Login() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.wrapper}>
      <LoginForm />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
