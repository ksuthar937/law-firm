import Logo from "./Logo/Logo";
import Tabs from "./Tabs/Tabs";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Tabs />
      <button className={styles.btn}>Contact Now</button>
    </div>
  );
}

export default Navbar;
