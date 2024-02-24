import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filtersContactAction } from "../../redux/filters/filters.slice";
import { getFilter } from "../../redux/filters/filter.selectors";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) =>
    dispatch(filtersContactAction(e.target.value.trim().toLowerCase()));

  const value = useSelector(getFilter);

  return (
    <div className={css.wrap}>
      <label className={css.label}>Find contacts by name </label>
      <input
        className={css.input}
        type="text"
        id="name"
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};
