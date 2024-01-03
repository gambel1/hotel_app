import css from "../RegisterForm/RegisterForm.module.css";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

const loginSchema = object({
  email: string()
    .email()
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/, "Invalid email format")
    .required(),
  password: string()
    .min(8, "must be at least 8 characters long")
    .max(32, "must be no more than 32 characters")
    .required(),
});

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values, actions);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "31px 29px 25px 32px",
          width: "410px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className={css.formTitle}>Логин</h2>
        <Field
          className={css.formInput}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Field
          className={css.formInput}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className={css.formButton} type="submit">
          Вход
        </button>
      </Form>
    </Formik>
  );
}
