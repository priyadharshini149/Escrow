import Header from "../components/Header";
import Table from "../components/Table";
import styles from "./EasypayoutsLoadScreen.module.css";
import data from "../data.json";
import { useEffect, useState } from "react";

const EasypayoutsLoadScreen = () => {
  const [companyName, setCompanyName] = useState("");
  const [account, setAccount] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
    setAccount(""); // Reset account when companyName changes
  };

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const CompanyNames = data.company_data.map(
    (company) => Object.keys(company)[0]
  );

  const AccountName = companyName
    ? data.company_data
        .find((company) => company[companyName])
        [companyName].map((acc) => Object.keys(acc)[0])
    : [];

  useEffect(() => {
    if (companyName && account) {
      const companyData = data.company_data.find(
        (company) => company[companyName]
      );
      if (companyData && companyData[companyName]) {
        const accountData = companyData[companyName].find(
          (acc) => acc[account]
        );
        if (accountData) {
          const accData = accountData[account].map((acc) => [
            acc.date,
            acc.credit,
            acc.Ac_Balance,
            acc.UTR_RRN,
            acc.Ac_No_UPI,
          ]);
          setfilteredData(accData);
        } else {
          setfilteredData(null);
        }
      }
    }
  }, [companyName, account]);

  return (
    <div className={styles.easypayoutsLoadScreen}>
      <div className={styles.sideNav}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.eazypayouts21Icon}
              alt=""
              src="/eazypayouts2-1.svg"
            />
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.boxArrowInDownParent}>
              <img
                className={styles.boxArrowInDownIcon}
                alt=""
                src="/boxarrowindown.svg"
              />
              <div className={styles.loads}>Loads</div>
            </div>
            <div className={styles.journalTextParent}>
              <img
                className={styles.boxArrowInDownIcon}
                alt=""
                src="/journaltext.svg"
              />
              <div className={styles.loads}>Statements</div>
            </div>
            <div className={styles.arrowDownUpParent}>
              <img
                className={styles.boxArrowInDownIcon}
                alt=""
                src="/arrowdownup.svg"
              />
              <div className={styles.loads}>Transactions</div>
            </div>
          </div>
        </div>
        <div className={styles.boxArrowRightParent}>
          <img
            className={styles.boxArrowRightIcon}
            alt=""
            src="/boxarrowright.svg"
          />
          <div className={styles.loads}>Logout</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <Header
          companyName={companyName}
          handleCompanyNameChange={handleCompanyNameChange}
          CompanyNames={CompanyNames}
          account={account}
          handleAccountChange={handleAccountChange}
          AccountName={AccountName}
        />
        <div className={styles.latestLoadsAre}>
          Latest Loads are displayed here
        </div>
        <Table filteredData={filteredData} />
      </div>
    </div>
  );
};

export default EasypayoutsLoadScreen;
