import css from "./HotelCard.module.css";
import Card from "../Card/Card";
import { cardsList } from "../cards";

export default function HotelCard() {
  return (
    <>
      <div className={css.hotelCard}>
        <h2 className={css.hotelCardTitle}>Подборка согласно выбора</h2>
        <ul className={css.hotelCardWrap}>
          {[...Array(9)].map((_, index) => (
            <Card
              key={index}
              card={cardsList[index].card}
              img={cardsList[index].image}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
