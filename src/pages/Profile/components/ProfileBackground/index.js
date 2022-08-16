import BackgroundProfileImage from "./static/images/backgroundProfile.jpg";

import styles from "./index.module.scss";

const ProfileBackground = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={BackgroundProfileImage}
        alt="background-profile"
      />
    </div>
  );
};

export default ProfileBackground;
