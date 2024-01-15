import css from "./Hotel.module.css";
import HotelOptions from "../../components/HotelOptions/HotelOptions";
import HotelCard from "../../components/HotelCard/HotelCard";

export default function Hotel() {
  return (
    <section className={css.hotel}>
      <div className="container">
        <HotelOptions />
        <HotelCard />
      </div>
    </section>
  );
}
