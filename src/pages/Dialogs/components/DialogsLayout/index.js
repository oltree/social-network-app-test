import { NavLink } from "react-router-dom";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const DialogsLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/1">Oleg</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/1">Dasha</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/1">Ivan</NavLink>
        </div>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.messages}>
        <div className={styles.message}>
          <div className={styles.userAvatar}>
            <img
              className={styles.avatar}
              height={40}
              src={Avatar}
              alt="user-avatar"
            />
          </div>
          <div className={styles.messageText}>
            <p className={styles.text}>Hello!</p>
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.userAvatar}>
            <img
              className={styles.avatar}
              height={40}
              src={Avatar}
              alt="user-avatar"
            />
          </div>
          <div className={styles.messageText}>
            <p className={styles.text}>How are you?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogsLayout;
