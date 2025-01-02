import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [, setEmail] = useState([]);
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const maildata = (e.target as HTMLFormElement).email.value;

    localStorage.setItem("userEmail", maildata);
    localStorage.setItem("userPassword", password);

    setEmail(maildata);
    setPassword("");

    alert("User data stored in local storage!");
    navigate("/data");
  };

  return (
    <div className="bg-block">
      <div className="login-form">
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input className="mail-input" type="email" name="email" required />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="passwrd-input"
              type="password"
              name="password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
