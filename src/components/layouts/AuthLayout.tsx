import logo from "assets/logo.png";
import styles from "styles/pages/AuthLayout.module.scss";

interface IProps {
  children: JSX.Element;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <main className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
        </div>
        {children}
      </div>
    </main>
  );
}
