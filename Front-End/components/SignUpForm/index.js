import { useState, useContext } from "react";
import { AppContext } from "../../Context";
import { FormLabel, FormTitle, FormBottom } from "./FormElements";

const SignUpForm = () => {
  const { insertUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={submitUser}>
      <FormTitle>
        Welcome,<br></br>
        Create your Admin Account.
      </FormTitle>
      <FormLabel>Name</FormLabel>
      <input
        type="text"
        onChange={(e) => addNewUser(e, "user_name")}
        placeholder="Enter name"
        required
      />
      <FormLabel>Email</FormLabel>
      <input
        type="email"
        onChange={(e) => addNewUser(e, "user_email")}
        placeholder="Enter email"
        required
      />
      <FormLabel>Password</FormLabel>
      <input
        type="password"
        onChange={(e) => addNewUser(e, "user_pass")}
        placeholder="Enter Password"
        required
      />
      <FormLabel> Confirm Password</FormLabel>
      <input
        type="password"
        onChange={(e) => addNewUser(e, "user_pass2")}
        placeholder="Enter Password again"
        required
      />
      <input className="sign-up--button" type="submit" value="Signup" />
      <FormBottom>
        Already have an account?
        <a href="/signin">Sign In</a>
      </FormBottom>
    </form>
  );
};

export default SignUpForm;
