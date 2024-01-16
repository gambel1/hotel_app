import css from "./Card.module.css";
import apartment_1 from "../../images/apartment_1.jpg";
import sprite from "../../images/sprite.svg";

export default function Card({ card }) {
  const numberOfIcons = Math.floor(Math.random() * 5) + 1;
  const numberOfPrice = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

  return (
    <li className={css.hotelCardList}>
      <a href="#" className={css.hotelCardLink}>
        <div className={css.hotelCardBackdrop}>
          <img src={apartment_1} alt="зображення хлопця і дівчат" />
          <div className={css.hotelCardBox}>
            <p className={css.hotelCardText}>{card}</p>
            {[...Array(numberOfIcons)].map((_, iconIndex) => (
              <svg key={iconIndex} width={16} height={16}>
                <use href={sprite + "#icon-star"}></use>
              </svg>
            ))}
            <p className={css.hotelCardPrice}>
              {numberOfPrice}{" "}
              <span className={css.hotelCardPriceLabel}>за ночь</span>
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
