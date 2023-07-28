import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/rocket.svg" className={styles.rocket} />
      <div>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </div>
    </div>
  );
}
