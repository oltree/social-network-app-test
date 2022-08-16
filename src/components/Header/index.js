import LogoImage from "../../static/images/logo.png";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img
          className={styles.logo}
          height={40}
          src={LogoImage}
          alt="logotip"
        />
      </div>
    </header>
  );
};

export default Header;
