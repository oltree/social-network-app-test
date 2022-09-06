import { memo } from "react";

import styles from "./index.module.scss";

const MessageForm = ({ messageText, onFormChange, onMessageCreate }) => {
  return (
    <form className={styles.form} onSubmit={onMessageCreate}>
      <textarea
        rows={1}
        className={styles.textarea}
        name="messageText"
        value={messageText}
        placeholder="Message..."
        onChange={onFormChange}
      />
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </div>
    </form>
  );
};

export default memo(MessageForm);
