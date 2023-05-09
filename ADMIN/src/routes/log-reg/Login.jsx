import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user";

import axios from "axios";
import { useState } from "react";

import "./Log-reg.scss";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const loginUser = async (credentials) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_LOGIN_USER,
        credentials
      );
      if (response) {
        dispatch(setUser(response.data));
        navigate("/user");
      }
    } catch (err) {
      console.log(err);
      setFeedback(err.response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCredentials = {
      email,
      password,
    };
    loginUser(newCredentials);
  };

  return (
    <main className="section-narrow log-reg">
      <h1>Login</h1>
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
        {feedback ? <p>{feedback}</p> : ""}
        <button className="button3">Login</button>
      </form>
      <Link to="/register">Don't have an account? Register!</Link>
    </main>
  );
};

export default Login;
