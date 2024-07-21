import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import styles from "./login.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const { setUser, setSubscribedStocks } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "") {
      alert("please enter the email id");
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedStocks = JSON.parse(localStorage.getItem("subscribedStocks"));
    if (storedUser && storedUser.email === email) {
      setUser(storedUser);
      setSubscribedStocks(storedStocks || []);
    } else {
      const newUser = { email };
      setUser(newUser);
      setSubscribedStocks([]);
    }
    setUser({ email });
    console.log(email);
    setEmail(email);
    navigate("/dashboard");
  };

  return (
    <div className={styles.login} >
      <div className={styles.log}>
        <p className={styles.login_text}>Login</p>
          <div className={styles.login_con}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Button className={styles.button} onClick={handleLogin} variant="contained">
              Login
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Login;
