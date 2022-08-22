import { memo, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import MessageForm from "../MessageForm";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const Message = ({ messages }) => {
  const [listMessages, setListMessages] = useState(messages);

  const handleAddMessage = useCallback((message) => {
    setListMessages((state) => {
      const messagesCopy = [...state];

      const newMessage = message;

      return [...messagesCopy, newMessage];
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {listMessages.map((message) => (
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
      <div>
        <MessageForm handleAddMessage={handleAddMessage} />
      </div>
    </div>
  );
};

export default memo(Message);
