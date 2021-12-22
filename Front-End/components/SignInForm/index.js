import { useState, useContext } from "react";
import { AppContext } from "../../Context";
import {FormLabel, FormTitle , FormBottom} from "./FormElements";

const Form = () => {
  const { chekcUser } = useContext(AppContext);
  const [user, checkForAUser] = useState({});

  // Storing the Insert User Form Data.
  const checkForUser = (e, field) => {
    checkForAUser({
      ...user,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const checkUser = (e) => {
    e.preventDefault();
    chekcUser(user);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={checkUser}>
      <div className="welcome">
      <span>
        Welcome Back!
      </span>      </div>

      <FormLabel>Email</FormLabel>
      <input
        type="email"
        onChange={(e) => checkForUser(e, "user_email")}
        placeholder="Enter email"
        required
      />
      <FormLabel>Password</FormLabel>
      <input
        type="password"
        onChange={(e) => checkForUser(e, "user_pass")}
        placeholder="Enter Password"
        required
      />
      <input className ="sign-up--button" type="submit" value="SignIn" />
      <FormBottom>
         don't have an account?
          <a href="/sign-up">Sign Up Now!</a>
      </FormBottom>
    </form>
  );
};

export default Form;
