import AvatarProfile from "../../../../static/images/avatarProfile.jpg";

import styles from "./index.module.scss";

const ProfileContactInformation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img className={styles.avatar} src={AvatarProfile} alt="avatar" />
      </div>
      <div className={styles.contactInformationsContainer}>
        <h2 className={styles.title}>Melekh Oleg</h2>
        <div className={styles.contactInformations}>
          <p className={styles.subtitle}>Date of Birst: 10 May</p>
          <p className={styles.subtitle}>Country: Belarus</p>
          <p className={styles.subtitle}>City: Minsk</p>
          <p className={styles.subtitle}>Education: BNTU</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileContactInformation;
