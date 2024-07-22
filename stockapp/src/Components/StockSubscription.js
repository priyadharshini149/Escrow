import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import styles from "./dashboard.module.css";
import {
  Button
} from "@mui/material";

const supportedStocks = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

const StockSubscription = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const { subscribeToStock } = useContext(UserContext);

  const handleSubscribe = () => {
    if (supportedStocks.includes(selectedStock)) {
      subscribeToStock(selectedStock);
    }
  };

  return (
    <div>
      <h3>Subscribe to a stock</h3>
      <h5 className={styles.description}>
        Stock ticker code ['GOOG','TSLA','AMZN','META','NVDA']
      </h5>
      <div className={styles.stock_sub}>
        <div className={styles.stock_select}>
          <select
            className={styles.select_stock}
            value={selectedStock}
            onChange={(e) => setSelectedStock(e.target.value)}
          >
            <option value="">Select a stock</option>
            {supportedStocks.map((stock) => (
              <option key={stock} value={stock}>
                {stock}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.stock_button}>
          <Button onClick={handleSubscribe} className={styles.button}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StockSubscription;
