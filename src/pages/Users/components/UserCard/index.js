import { memo } from "react";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const UserCard = ({ name, status, followed, photos }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userCard}>
        <div className={styles.image}>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
        </div>
        <div className={styles.information}>
          <div>{name}</div>
          <div>{status}</div>
        </div>
      </div>
      <button className={styles.button}>Follow</button>
    </div>
  );
};

export default memo(UserCard);
