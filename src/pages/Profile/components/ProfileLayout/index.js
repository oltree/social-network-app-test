import PropTypes from "prop-types";

import ProfileBackground from "../ProfileBackground";
import ProfileContactInformation from "../ProfileContactInformation";
import ProfilePosts from "../ProfilePosts";

import styles from "./index.module.scss";

const ProfileLayout = ({
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
      <ProfileBackground />
      <ProfileContactInformation />
      <ProfilePosts
        posts={posts}
        onAddPost={onAddPost}
        onRemovePost={onRemovePost}
        newTextPost={newTextPost}
        onFormChange={onFormChange}
        onFormSubmit={onFormSubmit}
        onClearForm={onClearForm}
        onIncrementLikes={onIncrementLikes}
        onDecrementLikes={onDecrementLikes}
      />
    </div>
  );
};

ProfileLayout.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      textPost: PropTypes.string,
      likes: PropTypes.number,
    })
  ),
};

export default ProfileLayout;
