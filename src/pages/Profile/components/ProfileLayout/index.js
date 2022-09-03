//import PropTypes from "prop-types";

import ProfileBackground from "../ProfileBackground";
import ProfileContactInformation from "../ProfileContactInformation";
import ProfilePosts from "../ProfilePosts";

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
      <ProfilePosts
        posts={posts}
        postText={postText}
        onPostCreate={onPostCreate}
        onFormChange={onFormChange}
        onPostRemove={onPostRemove}
        onPostIncrementLike={onPostIncrementLike}
        onPostDecrementLike={onPostDecrementLike}
      />
    </div>
  );
};

/* ProfileLayout.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      textPost: PropTypes.string,
      likes: PropTypes.number,
    })
  ),
}; */

export default ProfileLayout;
