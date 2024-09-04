import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  if (!username) {
    setErrors({ ...username, username: "Username Required" });
  }
  if (!email) {
    setErrors({ ...email, email: "Email Required" });
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    setErrors({ ...email, email: "Invalid email address" });
  }
  if (!password) {
    setErrors({ ...password, password: "Password Required" });
  }

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        validationSchema={validationSchema}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
            setErrors({ ...username, username: "Username Required" });
          }
          if (!values.email) {
            errors.email = "Required";
            setErrors({ ...email, email: "Email Required" });
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
            setErrors({ ...email, email: "Invalid email address" });
          }
          if (!values.password) {
            errors.password = "Required";
            setErrors({ ...password, password: "Password Required" });
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <ErrorMessage name="username" component="div" />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ErrorMessage name="password" component="div" />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ErrorMessage name="email" component="div" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
