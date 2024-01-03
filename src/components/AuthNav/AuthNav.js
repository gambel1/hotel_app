import sprite from "../../images/sprite.svg";
import css from "./AuthNav.module.css";
import { Link } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className={css.box}>
      <a href="/hotel" className={css.boxLink}>
        <svg width={25} height={28}>
          <use href={sprite + "#icon-logo"}></use>
        </svg>
        <p lang="en" className={css.boxLinkLogo}>
          GO<span className={css.boxLinkCurrent}>Home</span>
        </p>
      </a>
      <nav>
        <Link className={css.nav} to="/register">Регистрация</Link>
        <span className={css.nav}> / </span>
        <Link className={css.nav} to="/login">Вход</Link>
      </nav>
    </div>
  );
}
