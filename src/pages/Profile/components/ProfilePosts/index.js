import { memo } from "react";

import NewPost from "../NewPost";
import PostsForm from "../PostsForm";

import styles from "./index.module.scss";

const ProfilePosts = ({
  posts,
  onAddPost,
  onRemovePost,
  newTextPost,
  onFormChange,
  onFormSubmit,
  onClearForm,
  onIncrementLikes,
  onDecrementLikes,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My Posts</h2>

      <PostsForm
        onAddPost={onAddPost}
        newTextPost={newTextPost}
        onFormChange={onFormChange}
        onFormSubmit={onFormSubmit}
        onClearForm={onClearForm}
      />

      <div className={styles.posts}>
        {posts.map(({ id, textPost, likes }) => (
          <NewPost
            key={id}
            id={id}
            textPost={textPost}
            likes={likes}
            onRemovePost={onRemovePost}
            onIncrementLikes={onIncrementLikes}
            onDecrementLikes={onDecrementLikes}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ProfilePosts);
