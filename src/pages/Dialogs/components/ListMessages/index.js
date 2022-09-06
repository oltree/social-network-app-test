import { memo } from "react";
import { v4 as uuid } from "uuid";

import Message from "../Message";
import MessageForm from "../MessageForm";

import styles from "./index.module.scss";

const ListMessages = ({
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
        <Message key={uuid()} message={message} name={name} />
      ))}
      {messages.map(({ id, text }) => (
        <Message key={id} message={text} name={"Me"} />
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

export default memo(ListMessages);
