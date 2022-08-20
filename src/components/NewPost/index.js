import Avatar from "../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const NewPost = ({ id, textPost, handleRemovePost }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <img className={styles.avatar} height={50} src={Avatar} alt="avatar" />
        <p className={styles.text}>{textPost}</p>
      </div>
      <button className={styles.close} onClick={() => handleRemovePost(id)}>
        X
      </button>
    </div>
  );
};

export default NewPost;
