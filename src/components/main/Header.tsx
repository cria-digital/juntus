import withProtection from "components/hocs/withProtection";
import { Notification, HelpCircle, Exit } from "react-coolicons";
import styles from "styles/components/main/Header.module.scss";

function Header() {
  if (window.location.pathname === "/login") return null;
  return (
    <header className={styles.header}>
      <nav className={styles.icon_container}>
        <Notification />
        <HelpCircle />
        <Exit />
      </nav>
    </header>
  );
}

export default withProtection(Header);
