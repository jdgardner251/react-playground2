import React, { useRef, useState } from "react";
import ValidationError from "./ValidationError";

const RegistrationForm = () => {
  const nameInput = useRef();

  const [name, setName] = useState({ value: "", touched: false });
  const [password, setPassword] = useState({ value: "", touched: false });
  const [repeatPassword, setRepeatPassword] = useState({
    value: "",
    touched: false,
  });

  const updateName = (input) => {
    setName({ value: input, touched: true });
  };

  const updatePassword = (input) => {
    setPassword({ value: input, touched: true });
  };

  const updateRepeatPassword = (input) => {
    setRepeatPassword({ value: input, touched: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name.value);
    console.log("Password: ", password.value);
    console.log("Repeat Password: ", repeatPassword.value);
  };

  const validateName = () => {
    const input = name.value.trim();

    if (input.length === 0) {
      return "Name is required";
    } else if (input.length < 3) {
      return "Name must be at least 3 characters long";
    }
  };

  const validatePassword = () => {
    const input = password.value.trim();
    if (input.length === 0) {
      return "Password is required";
    } else if (input.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!input.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  };

  const validateRepeatPassword = () => {
    const input = repeatPassword.value.trim();
    if (input !== password.value.trim()) {
      return "Passwords do not match";
    }
  };

  return (
    <form className="registration" onSubmit={(e) => handleSubmit(e)}>
      <h2>Register</h2>
      <div className="registration__hint">* required field</div>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          className="registration__control"
          name="name"
          id="name"
          ref={nameInput}
          onChange={(e) => updateName(e.target.value)}
        />
        {name.touched && <ValidationError message={validateName()} />}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password *</label>
        <input
          type="password"
          className="registration__control"
          name="password"
          id="password"
          onChange={(e) => updatePassword(e.target.value)}
        />
        {password.touched && <ValidationError message={validatePassword()} />}
        <div className="registration__hint">
          6 to 72 characters, must include a number
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="repeatPassword">Repeat Password *</label>
        <input
          type="password"
          className="registration__control"
          name="repeatPassword"
          id="repeatPassword"
          onChange={(e) => updateRepeatPassword(e.target.value)}
        />
        {repeatPassword.touched && (
          <ValidationError message={validateRepeatPassword()} />
        )}
      </div>

      <div className="registration__button__group">
        <button type="reset" className="registration__button">
          Cancel
        </button>
        <button 
            type="submit" 
            className="registration__button"
            disabled={
                validateName() ||
                validatePassword() ||
                validateRepeatPassword()
            }>
          Save
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
