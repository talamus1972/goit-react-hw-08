import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  redirectTo = "/",
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <b>Refreshing user, please wait...</b>;
  }

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
