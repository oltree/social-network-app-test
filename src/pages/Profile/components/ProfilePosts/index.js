import { memo } from "react";
import { v4 as uuid } from "uuid";

import NewPost from "../NewPost";
import PostsForm from "../PostsForm";

import styles from "./index.module.scss";

const ProfilePosts = ({
  posts,
  postText,
  onPostCreate,
  onFormChange,
  onPostRemove,
  onPostIncrementLike,
  onPostDecrementLike,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My Posts</h2>

      <PostsForm
        postText={postText}
        onPostCreate={onPostCreate}
        onFormChange={onFormChange}
      />

      <div className={styles.posts}>
        {posts.map(({ id, text, likes }) => (
          <NewPost
            key={uuid()}
            id={id}
            text={text}
            onPostRemove={onPostRemove}
            onPostIncrementLike={onPostIncrementLike}
            onPostDecrementLike={onPostDecrementLike}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ProfilePosts);
