import { memo } from "react";

import styles from "./index.module.scss";

const MessageForm = ({
  onAddPost,
  newTextPost,
  onFormChange,
  onFormSubmit,
  onClearForm,
}) => {
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <textarea
        rows={3}
        className={styles.textarea}
        onChange={onFormChange}
        value={newTextPost}
        type="text"
        placeholder="Post..."
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onClearForm}>
          Clear
        </button>
        <button
          className={styles.button}
          onClick={() => onAddPost(newTextPost)}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default memo(MessageForm);
