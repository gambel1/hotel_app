import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../Register/Register.module.css";

export default function Login() {
  return (
    <section className={css.authentication}>
      <div className="container">
        <div className={css.backdrop}>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
