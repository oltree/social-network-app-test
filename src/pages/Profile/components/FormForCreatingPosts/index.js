import { memo, useCallback, useState } from "react";

import styles from "./index.module.scss";

const FormForCreatingPosts = ({ handleAddPost }) => {
  const [text, setText] = useState("");

  const handleFormChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    setText("");
  }, []);

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <textarea
        rows={3}
        className={styles.textarea}
        onChange={handleFormChange}
        value={text}
        type="text"
        placeholder="Post..."
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => {}}>
          Clear
        </button>
        <button className={styles.button} onClick={() => handleAddPost(text)}>
          Add Post
        </button>
      </div>
    </form>
  );
};

export default memo(FormForCreatingPosts);
