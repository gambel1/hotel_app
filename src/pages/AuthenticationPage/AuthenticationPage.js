import css from "./AuthenticationPage.module.css";
// import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthenticationPage() {
  return (
    <section className={css.authentication}>
      <div className="container">
        <div className={css.backdrop}>
          {/* <RegisterForm /> */}
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
