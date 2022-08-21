import PropTypes from "prop-types";

import ProfileBackground from "../ProfileBackground";
import ProfileContactInformation from "../ProfileContactInformation";
import ProfilePosts from "../ProfilePosts";

import styles from "./index.module.scss";

const ProfileLayout = ({ posts, handleAddPost, handleRemovePost }) => {
  return (
    <div className={styles.wrapper}>
      <ProfileBackground />
      <ProfileContactInformation />
      <ProfilePosts
        posts={posts}
        handleAddPost={handleAddPost}
        handleRemovePost={handleRemovePost}
      />
    </div>
  );
};

ProfileLayout.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, textPost: PropTypes.string })
  ),
};

export default ProfileLayout;
