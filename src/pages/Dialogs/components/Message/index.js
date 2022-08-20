import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const Message = ({ message }) => {
  return (
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
        <p className={styles.text}>{message}</p>
      </div>
    </div>
  );
};

export default Message;
