import withProtection from "components/hocs/withProtection";
import { Notification, HelpCircle, Exit } from "react-coolicons";
import styles from "styles/components/main/Header.module.scss";

const pathnames = ["/login", "/password-change", "/register"];

function Header(props: any) {
  if (pathnames.includes(window.location.pathname)) return null;
  return (
    <header className={styles.header}>
      <nav className={styles.icon_container}>
        <div className="cursor-pointer">
          <Notification />
        </div>
        <div className="cursor-pointer">
          <HelpCircle />
        </div>
        <div
          onClick={() =>
            props.setType((type) =>
              type === "EMBARCADOR" ? "TRANSPORTADOR" : "EMBARCADOR"
            )
          }
          className="cursor-pointer"
        >
          <Exit />
        </div>
      </nav>
    </header>
  );
}

export default withProtection(Header);
