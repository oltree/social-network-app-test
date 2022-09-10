import { memo } from "react";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const UserCard = ({ id, name, status, followed, photos, onAddFollow }) => {
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
      <button onClick={() => onAddFollow(id)} className={styles.button}>
        {followed ? "Follow" : "Unfollow"}
      </button>
    </div>
  );
};

export default memo(UserCard);
