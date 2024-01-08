import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./Register.module.css";

export default function Register() {
  return (
    <section className={css.authentication}>
      <div className="container">
        <div className={css.backdrop}>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
