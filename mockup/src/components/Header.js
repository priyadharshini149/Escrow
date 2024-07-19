import { memo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import styles from "./header.module.css";

const Header = memo(({
  className = "",
  companyName,
  handleCompanyNameChange,
  CompanyNames,
  account,
  handleAccountChange,
  AccountName,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.selectoutlinedParent}>
        <FormControl
          className={styles.selectoutlined}
          variant="outlined"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "220px",
            height: "56px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "56px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 1,
              p: 0,
              height: "56px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <InputLabel color="primary">Company</InputLabel>
          <Select
            color="primary"
            size="medium"
            label="label"
            value={companyName}
            onChange={handleCompanyNameChange}
          >
            {CompanyNames.map((company) => (
              <MenuItem key={company} value={company}>
                {company}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.selectoutlined1}
          variant="outlined"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "220px",
            height: "56px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "56px",
              display: "inline-flex",
              textAlign: "center",
            },
            "& .MuiSelect-select": {
              m: 1,
              p: 0,
              height: "56px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary">Account</InputLabel>
          <Select
            color="primary"
            size="medium"
            label="Label"
            value={account}
            onChange={handleAccountChange}
          >
            {AccountName.map((account) => (
              <MenuItem key={account} value={account}>
                {account}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.avaliableBalanceParent}>
            <b className={styles.avaliableBalance}>Avaliable Balance</b>
            <div className={styles.div}>₹ 8888,88,88,888</div>
          </div>
        </div>
        <div className={styles.cashStack} />
      </div>
    </div>
  );
});

export default Header;
