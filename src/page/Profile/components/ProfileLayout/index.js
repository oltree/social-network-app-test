import BackgroundProfileImage from "./static/images/backgroundProfile.jpg";

import styles from "./index.module.scss";

const ProfileLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={BackgroundProfileImage} alt="background-profile" />
      </div>
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    </div>
  );
};

export default ProfileLayout;
