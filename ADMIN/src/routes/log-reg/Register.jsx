import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Log-reg.scss";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPw) {
      setFeedback(
        "When your account is created and authorized you'll receive an email!"
      );
      setTimeout(() => {
        setFeedback("");
      }, 10000);
    } else {
      setFeedback("Passwords don't match");
    }

    // IMPLEMENT USER REGISTRATION
  };
  return (
    <main className="section-narrow log-reg">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="name"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          required
        />

        <label htmlFor="pwconfirm">Confirm password:</label>
        <input
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
          type="password"
          name="pwconfirm"
          id="pwconfirm"
          required
        />
        {feedback ? <p>{feedback}</p> : ""}
        <button className="button3">Register</button>
      </form>
      <Link to="/">Already have an account? Login!</Link>
    </main>
  );
};

export default Register;
