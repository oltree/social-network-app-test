import { memo } from "react";
import { v4 as uuid } from "uuid";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const Message = ({ messages }) => {
  return (
    <div className={styles.wrapper}>
      {messages.map((message) => (
        <div key={uuid()} className={styles.message}>
          <div className={styles.userAvatar}>
            <img
              className={styles.avatar}
              width={40}
              height={40}
              src={Avatar}
              alt="user-avatar"
            />
          </div>
          <div className={styles.messageText}>
            <p className={styles.text}>{message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Message);
