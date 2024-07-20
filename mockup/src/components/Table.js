import { memo } from "react";
import styles from "./table.module.css";

const Table = memo(({ className = "", filteredData }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <table>
        <tr className={styles.table_header}>
          <th>
            <b className={styles.acBalance}>Date</b>
          </th>
          <th>
            <b className={styles.acBalance}>Credit</b>
          </th>
          <th>
            <b className={styles.acBalance}>A/c Balance</b>
          </th>
          <th>
            <b className={styles.acBalance}>UTR/RRN</b>
          </th>
          <th>
            <b className={styles.acBalance}>A/c No /UPI</b>
          </th>
        </tr>
        <tbody>
          {filteredData.length > 0 && (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.acBalance}>{item[0]}</div>
                </td>
                <td>
                  <div className={styles.div}>{item[1]}</div>
                </td>
                <td>
                  <div className={styles.pm}>{item[2]}</div>
                </td>
                <td>
                  <div className={styles.pm}>{item[3]}</div>
                </td>
                <td>
                  <div className={styles.pm}>{item[4]}</div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {
        filteredData.length===0 && <h3 className={styles.no_record}>No record found</h3>
      }
    </div>
  );
});

export default Table;
