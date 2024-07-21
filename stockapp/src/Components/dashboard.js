import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import StockSubscription from "../Components/StockSubscription";
import StockPrices from "../Components/StockPrices";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import { Button } from "@mui/material";

const Dashboard = () => {
  const { user, subscribedStocks, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

    if (!user) {
      return (
        <div>
          Please log in
          <button onClick={handleGoToLogin}> go to login</button>
        </div>
      );
    }

  return (
    <div className={styles.Dashboard}>
      <div className={styles.log}>
        <div className={styles.button_div}>
          <Button
            onClick={handleLogin}
            variant="contained"
            className={styles.button}
          >
            Login
          </Button>
          <Button
            onClick={handleLogout}
            variant="contained"
            className={styles.button}
          >
            Logout
          </Button>
        </div>
        <div className={styles.heading}>
          <h1>Stock Broker</h1>
        </div>
      </div>
      <div>
        <div className={styles.wel}>
          <h2>Welcome, <span>{user.email}</span></h2>
        </div>
        <div className={styles.Stock_price}>
          <div className={styles.Stocks}>
            <div className={styles.sub}>
              <StockSubscription />
            </div>
            <div className={styles.price}>
              <StockPrices stocks={subscribedStocks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
