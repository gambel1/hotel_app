import { сitiesList } from "../cities";
import css from "./HotelOptions.module.css";
import { useState } from "react";

export default function HotelOptions() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <h1 lang="en" className={css.visuallyHidden}>
        Hotel
      </h1>
      <div className={css.hotelBox}>
        <ul className={css.hotelBoxList}>
          <li>
            <select
              className={css.hotelBoxSelect}
              id="dropdown"
              value={selectedValue}
              onChange={handleDropdownChange}
            >
              {сitiesList.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </li>
          <li>
            <input
              className={css.hotelBoxInput}
              type="text"
              placeholder="Цена, от"
            />
          </li>
        </ul>
        <button className={css.hotelBoxButton}>Подбор жилья</button>
      </div>
    </>
  );
}
