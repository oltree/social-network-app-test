import { memo, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import MessageForm from "../MessageForm";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const Messages = ({ messages, name }) => {
  const [listMessages, setListMessages] = useState(messages.me);

  const handleAddMessage = useCallback((message) => {
    setListMessages((state) => {
      const messagesCopy = [...state];

      const newMessage = message;

      return [...messagesCopy, newMessage];
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {messages?.user.map((message) => (
        <div>
          <div key={uuid()} className={styles.message}>
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
      {listMessages.map((message) => (
        <div>
          <div key={uuid()} className={styles.message}>
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
            <div>{"Me"}</div>
          </div>
        </div>
      ))}
      <div>
        <MessageForm handleAddMessage={handleAddMessage} />
      </div>
    </div>
  );
};

export default memo(Messages);
