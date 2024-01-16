import css from "./HotelCard.module.css";
import Card from "../Card/Card";
// import apartment_1 from "../../images/apartment_1.jpg";
// import sprite from "../../images/sprite.svg";
import { cardsList } from "../cards";

export default function HotelCard() {
  // const numberOfIcons = Math.floor(Math.random() * 5) + 1;
  // const numberOfPrice = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

  return (
    <>
      <div className={css.hotelCard}>
        <h2 className={css.hotelCardTitle}>Подборка согласно выбора</h2>
        <ul>
          {[...Array(9)].map((_, index) => (
            <Card key={index} card={cardsList[index].card} />
            // <li key={index} className={css.hotelCardList}>
            //   <a href="#" className={css.hotelCardLink}>
            //     <div className={css.hotelCardBackdrop}>
            //       <img src={apartment_1} alt="зображення хлопця і дівчат" />
            //       <div className={css.hotelCardBox}>
            //         <p className={css.hotelCardText}>
            //           Роскошные апартаменты в скайндинавском стиле с панорамным
            //           видом на реку и бесплатным Wi-Fi.
            //         </p>
            //         {[...Array(numberOfIcons)].map((_, iconIndex) => (
            //           <svg key={iconIndex} width={16} height={16}>
            //             <use href={sprite + "#icon-star"}></use>
            //           </svg>
            //         ))}
            //         <p className={css.hotelCardPrice}>
            //           {numberOfPrice}{" "}
            //           <span className={css.hotelCardPriceLabel}>за ночь</span>
            //         </p>
            //       </div>
            //     </div>
            //   </a>
            // </li>
          ))}
        </ul>
      </div>
    </>
  );
}
