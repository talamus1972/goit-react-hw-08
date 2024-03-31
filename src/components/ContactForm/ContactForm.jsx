import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const usernameFieldId = useId();
  const phoneFieldId = useId();

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(addContact(values))
            .unwrap()
            .then(() => {
              toast.success("Contact successfully added!");
              actions.resetForm();
            })
            .catch(() => {
              toast.error("Error adding contact!");
              actions.resetForm();
            });
          actions.resetForm();
        }}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <h2 className={css.title}> Your contacts</h2>
          <label className={css.label} htmlFor={usernameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={usernameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label className={css.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={phoneFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
