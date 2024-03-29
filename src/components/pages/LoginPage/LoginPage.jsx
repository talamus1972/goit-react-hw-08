import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader.jsx";
import LoginForm from "../../LoginForm/LoginForm.jsx";
import { selectError, selectLoading } from "../../../redux/auth/selectors.js";
import ErrorMessage from "../../ErrorMessage/ErrorMessage.jsx";

export default function LoginPage() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm />
     {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
