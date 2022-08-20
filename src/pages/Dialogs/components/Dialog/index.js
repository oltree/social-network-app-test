import { memo } from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const Dialog = ({ id, name }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog}>
        <NavLink to={id}>{name}</NavLink>
      </div>
    </div>
  );
};

export default memo(Dialog);
