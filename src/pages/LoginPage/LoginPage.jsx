import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { selectError, selectLoading } from "../../redux/auth/selectors.js";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}
