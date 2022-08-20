import Dialog from "../Dialog";
import Message from "../Message";

import styles from "./index.module.scss";

const DialogsLayout = ({ users, messages }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {users.map(({ id, name }) => (
          <Dialog key={id} id={id} name={name} />
        ))}
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.messages}>
        {messages.map(({ id, message }) => (
          <Message key={id} id={id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default DialogsLayout;
