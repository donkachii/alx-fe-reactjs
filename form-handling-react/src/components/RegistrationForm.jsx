import { useState } from "react";
import FormikForm from "./formikForm";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

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
      <FormikForm
        username={username}
        password={password}
        email={email}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setErrors={setErrors}
      />
    </div>
  );
};

export default RegistrationForm;
