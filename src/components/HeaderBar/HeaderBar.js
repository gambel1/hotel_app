import AuthNav from "../AuthNav/AuthNav";
import css from './HeaderBar.module.css'

export default function HeaderBar() {
  return (
    <header className={css.header}>
      <div className="container">
        <AuthNav />
      </div>
    </header>
  );
}
