import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

const StockPrices = ({ stocks }) => {
  const [stockPrices, setStockPrices] = useState({});

  useEffect(() => {
    const updatePrices = () => {
      const newPrices = {};
      stocks.forEach((stock) => {
        newPrices[stock] = (Math.random() * 1000).toFixed(2);
      });
      setStockPrices(newPrices);
    };

    const interval = setInterval(updatePrices, 1000);
    return () => clearInterval(interval);
  }, [stocks]);

  return (
    <div>
      <div>
        <h3>Stock Prices</h3>
        <div className={styles.table_stock}>
            {stocks.length===0 ?  <h5 className={styles.no_record}>stocks is not yet Subscribed</h5>:
          <table className={styles.table}>
            <tr>
                <td> Stock ticker code</td>
                <td>Stock prices</td>
            </tr>
            {stocks.map((stock) => (
              <tr key={stock}>
                <td> {stock}</td>
                <td>${stockPrices[stock]}</td>
              </tr>
            ))}
          </table>
            
            
            }
        </div>
      </div>
    </div>
  );
};

export default StockPrices;
