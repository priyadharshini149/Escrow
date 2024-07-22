import React,{useState, useEffect} from 'react'
import styles from "./SideNav.module.css";
import { Menu, Close } from '@mui/icons-material';
export default function SideNav() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <768);
    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
      };
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        // Initial check
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
    <div className={styles.side}>
    {isMobile && (
        <button onClick={toggleSideNav} className={styles.toggleButton}>
          {isSideNavOpen ? <Close/> : <Menu/> } {isSideNavOpen}
        </button>
      )}
      {
        (isSideNavOpen || !isMobile) && (

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
        <div className={styles.boxArrowRightParent}>
          <img
            className={styles.boxArrowRightIcon}
            alt=""
            src="/boxarrowright.svg"
          />
          <div className={styles.loads}>Logout</div>
        </div>
        </div>
      </div>
        )
      }
    </div>
  )
}
