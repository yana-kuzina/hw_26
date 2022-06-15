import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setErrorPassword("");

    if (username.trim().length === 0) {
      setErrorMessage("Username is a required field");
    }
    if (password !== confirmPassword) {
      setErrorPassword("Confirm password = password");
    }

    console.log("Username", username);
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm Password:{" "}
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </label>

      {errorMessage && <div>{errorMessage}</div>}
      {errorPassword && <div>{errorPassword}</div>}

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default RegistrationForm;
