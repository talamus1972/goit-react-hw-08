import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
