import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import styles from "./index.module.scss";
import Dialog from "../Dialog";

const DialogsLayout = ({ users }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {users.map(({ id, name }) => (
          <Dialog key={uuid()} id={id} name={name} />
        ))}
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.messages}>
        <Outlet />
      </div>
    </div>
  );
};

DialogsLayout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      messages: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default DialogsLayout;
