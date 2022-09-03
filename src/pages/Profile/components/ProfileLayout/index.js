import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import ProfileBackground from "../ProfileBackground";
import ProfileContactInformation from "../ProfileContactInformation";
import NewPost from "../NewPost";
import PostsForm from "../PostsForm";

import styles from "./index.module.scss";

const ProfileLayout = ({
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
      <ProfileBackground />
      <ProfileContactInformation />
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
              likes={likes}
              onPostRemove={onPostRemove}
              onPostIncrementLike={onPostIncrementLike}
              onPostDecrementLike={onPostDecrementLike}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ProfileLayout.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      likes: PropTypes.number,
    })
  ),
};

export default ProfileLayout;
