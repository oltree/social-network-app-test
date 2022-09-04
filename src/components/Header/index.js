import Logotip from "../../static/images/logo.png";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.mainLogotip}>
        <img
          className={styles.logotip}
          height={40}
          src={Logotip}
          alt="logotip"
        />
      </div>
    </header>
  );
};

export default Header;
