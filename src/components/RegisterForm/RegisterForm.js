import css from "./RegisterForm.module.css";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import * as yup from "yup";

const registerSchema = object({
  name: string()
    .min(3, "must be at least 3 characters long")
    .max(32, "must be no more than 32 characters")
    .required(),
  email: string()
    .email()
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/, "Invalid email format")
    .required(),
  password: string()
    .min(8, "must be at least 8 characters long")
    .max(32, "must be no more than 32 characters")
    .required(),
  confirmPassword: string()
    .min(8, "must be at least 8 characters long")
    .max(32, "must be no more than 32 characters")
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"), // Use yup.ref here
});

export default function RegisterForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values, actions);
  };

  return (
    
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2 className={css.formTitle}>Регистрация</h2>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Name"
          />
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
          <Field
            className={css.formInput}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <button className={css.formButton} type="submit">
            Вход
          </button>
        </Form>
      </Formik>
    
  );
}
