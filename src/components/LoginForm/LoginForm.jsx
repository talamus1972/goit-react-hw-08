import { useId } from "react";
import css from "./LoginForm.module.css"; 
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations"; 

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(logIn(values)); 

          actions.resetForm();
        }}
        validationSchema={LoginSchema}
      >
        <Form className={css.form}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.input}
            type="text"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />

          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            className={css.input}
            type="password" 
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button className={css.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
}
