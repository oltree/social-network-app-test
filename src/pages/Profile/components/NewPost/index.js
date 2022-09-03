import { memo } from "react";

import Avatar from "../../../../static/images/avatar.jpg";

import styles from "./index.module.scss";

const NewPost = ({
  id,
  text,
  likes,
  onPostRemove,
  onPostIncrementLike,
  onPostDecrementLike,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <img className={styles.avatar} height={50} src={Avatar} alt="avatar" />
        <div className={styles.text}>{text}</div>
        <div>
          <button onClick={() => onPostIncrementLike(id)}>add like</button>
          {likes !== 0 && <div>{likes}</div>}
        </div>
      </div>

      <button className={styles.close} onClick={() => onPostRemove(id)}>
        X
      </button>
    </div>
  );
};

export default memo(NewPost);
