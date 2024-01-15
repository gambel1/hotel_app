import css from "./HotelCard.module.css";
import apartment_1 from "../../images/apartment_1.jpg";
import sprite from "../../images/sprite.svg";

export default function HotelCard() {
  return (
    <>
      <div className={css.hotelCard}>
        <h2 className={css.hotelCardTitle}>Подборка согласно выбора</h2>
        <ul>
          <li className={css.hotelCardList}>
            <a href="#" className={css.hotelCardLink}>
              <div className={css.hotelCardBackdrop}>
                <img src={apartment_1} alt="зображення хлопця і дівчат" />
                <div className={css.hotelCardBox}>
                  <p className={css.hotelCardText}>
                    Роскошные апартаменты в скайндинавском стиле с панорамным
                    видом на реку и бесплатным Wi-Fi.
                  </p>
                  <svg width={16} height={16}>
                    <use href={sprite + "#icon-star"}></use>
                  </svg>
                  <p className={css.hotelCardPrice}>
                    UAH 1 250{" "}
                    <span className={css.hotelCardPriceLabel}>за ночь</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
