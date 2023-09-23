import styles from "./Tabs.module.css";

function Tabs() {
  return (
    <div className={styles.wrapper}>
      <p>Home</p>
      <p>Attorneys</p>
      <p>Practice Areas</p>
      <p>About Us</p>
    </div>
  );
}

export default Tabs;
