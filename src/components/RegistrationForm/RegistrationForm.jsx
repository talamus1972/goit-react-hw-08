import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operation";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(register(values));

          actions.resetForm();
        }}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label htmlFor={usernameFieldId}>Username</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={usernameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />

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
            type="text"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
