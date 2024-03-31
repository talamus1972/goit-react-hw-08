import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { selectError, selectLoading } from "../../redux/auth/selectors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function RegisterPage() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1>Register your account</h1>
      <RegistrationForm />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
