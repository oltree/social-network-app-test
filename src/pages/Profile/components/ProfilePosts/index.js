import { useCallback, useState } from "react";

import NewPost from "../../../../components/NewPost";

import styles from "./index.module.scss";

const ProfilePosts = ({ posts, handleAddPost, handleRemovePost }) => {
  const [text, setText] = useState("");

  const handleFormChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    setText("");
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.posts}>My Posts</h2>
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
      {posts.map(({ id, textPost }) => (
        <NewPost
          key={id}
          id={id}
          textPost={textPost}
          handleRemovePost={handleRemovePost}
        />
      ))}
    </div>
  );
};

export default ProfilePosts;
