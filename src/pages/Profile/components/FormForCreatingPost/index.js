import { memo } from "react";

import styles from "./index.module.scss";

const FormForCreatingPost = ({ postText, onPostCreate, onFormChange }) => {
  return (
    <form className={styles.form} onSubmit={onPostCreate}>
      <textarea
        rows={3}
        className={styles.textarea}
        name="postText"
        value={postText}
        placeholder="Post..."
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

export default memo(FormForCreatingPost);
