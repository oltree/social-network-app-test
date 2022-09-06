import { memo } from "react";
import { v4 as uuid } from "uuid";

import MessageForm from "../MessageForm";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const Messages = ({
  userMessages,
  name,
  messages,
  messageText,
  onFormChange,
  onMessageCreate,
}) => {
  return (
    <div className={styles.wrapper}>
      {userMessages.map((message) => (
        <div key={uuid()}>
          <div className={styles.message}>
            <div className={styles.userAvatar}>
              <img
                className={styles.avatar}
                width={50}
                height={40}
                src={Avatar}
                alt="user-avatar"
              />
            </div>
            <div className={styles.messageText}>
              <p className={styles.text}>{message}</p>
            </div>
            <div>{name}</div>
          </div>
        </div>
      ))}
      {messages.map(({ id, text }) => (
        <div key={id} className={styles.message}>
          <div className={styles.userAvatar}>
            <img
              className={styles.avatar}
              width={50}
              height={40}
              src={Avatar}
              alt="user-avatar"
            />
          </div>
          <div className={styles.messageText}>
            <p className={styles.text}>{text}</p>
          </div>
          <div>{"Me"}</div>
        </div>
      ))}
      <div>
        <MessageForm
          messageText={messageText}
          onFormChange={onFormChange}
          onMessageCreate={onMessageCreate}
        />
      </div>
    </div>
  );
};

export default memo(Messages);
