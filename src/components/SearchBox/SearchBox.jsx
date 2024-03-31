import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
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
        <h3 className={css.title}>Find contacts by name or phone</h3>
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
