import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const Dialog = ({ id, name }) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default Dialog;
