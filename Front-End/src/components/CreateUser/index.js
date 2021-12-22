import { useState, useContext } from "react";
import { AppContext } from "../../Context";
import {FormLabel, FormTitle , FormBottom} from "./FormElements";

const Form = () => {
  const { insertUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  // Storing the Insert User Form Data.
  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

  return (
    <form className="insertForm createUserForm" onSubmit={submitUser}>
       <FormTitle>
         Welcome,<br></br>
        Create a New User!!
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
      <input className ="sign-up--button" type="submit" value="Signup" />
    </form>
  );
};

export default Form;
