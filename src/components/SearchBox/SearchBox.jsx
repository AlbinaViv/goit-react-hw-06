import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filtersContactAction } from "../../redux/filters/filters.slice";

export const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const handleFilterChange = (e) =>
    dispatch(filtersContactAction(e.target.value.trim()));

  const value = useSelector((state) => state.filters);

  return (
    <div className={css.wrap}>
      <label
        htmlFor={searchId}
        className={css.label}
      >
        Find contacts by name{" "}
      </label>
      <input
        className={css.input}
        type="text"
        id={searchId}
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};
