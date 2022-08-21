import { NavLink, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./index.module.scss";
import FormForCreatingPosts from "../../../Profile/components/FormForCreatingPosts";

const DialogsLayout = ({ users }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {users.map(({ id, name }) => (
          <NavLink className={styles.dialog} key={id} to={id}>
            {name}
          </NavLink>
        ))}
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.messages}>
        <Outlet />
        <div>
          <div>lol</div>
          <FormForCreatingPosts />
        </div>
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
