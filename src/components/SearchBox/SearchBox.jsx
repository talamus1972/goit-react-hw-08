import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/contacts/filtersSlice";
import { selectNameFilter } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";

export default function SearchBox() {
  const id = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wraper}>
      <label htmlFor={id} className={css.text}>
        {" "}
        Find contacts by name
      </label>
      <input
        type="text"
        value={value}
        className={css.input}
        onChange={handleFilterChange}
      />
    </div>
  );
}
