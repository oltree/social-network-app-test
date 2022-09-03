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
      <div className={styles.header}>
        <div className={styles.post}>
          <img
            className={styles.avatar}
            height={50}
            src={Avatar}
            alt="avatar"
          />
          <div className={styles.data}>
            <p>Melekh Oleg</p>
            <p>03.09.2022 в 19.00</p>
          </div>
        </div>

        <button className={styles.close} onClick={() => onPostRemove(id)}>
          X
        </button>
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.likesContainer}>
        <button
          onClick={() =>
            likes % 2 === 0 ? onPostIncrementLike(id) : onPostDecrementLike(id)
          }
        >
          like
        </button>
        {likes !== 0 && <div>{likes}</div>}
      </div>
    </div>
  );
};

export default memo(NewPost);
