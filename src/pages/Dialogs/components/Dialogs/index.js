import { memo } from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const Dialogs = ({ id, name }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog}>
        <NavLink className={styles.link} to={id}>
          {name}
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Dialogs);
