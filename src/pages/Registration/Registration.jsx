import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { selectError, selectLoading } from "../../redux/auth/selectors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "././Registration.module.css";

export default function Registration() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.wrapper}>
      <RegistrationForm />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
