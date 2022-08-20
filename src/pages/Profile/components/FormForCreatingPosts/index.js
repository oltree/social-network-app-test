import { useCallback, useState } from "react";

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
      <input
        className={styles.input}
        onChange={handleFormChange}
        value={text}
        type="text"
        placeholder="Post..."
      />
      <button className={styles.button} onClick={() => handleAddPost(text)}>
        Add Post
      </button>
    </form>
  );
};

export default FormForCreatingPosts;
