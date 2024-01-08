import { сitiesList } from "../cities";
import css from "./HotelOptions.module.css";
import { useState } from "react";

export default function HotelOptions() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
      <div className="container">
    <section className={css.hotelOptions}>
        <ul className={css.hotelOptionsList}>
          <li>
            <select
              className={css.hotelOptionsSelect}
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
              className={css.hotelOptionsInput}
              type="text"
              placeholder="Цена, от"
            />
          </li>
        </ul>
        <button className={css.hotelOptionsButton}>Подбор жилья</button>
    </section>
      </div>
  );
}
