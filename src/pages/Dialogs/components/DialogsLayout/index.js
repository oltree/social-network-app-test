import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import styles from "./index.module.scss";
import Dialogs from "../Dialogs";
import Messages from "../Messages";

const DialogsLayout = ({ users }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {users.map(({ id, name }) => (
          <Dialogs key={uuid()} id={id} name={name} />
        ))}
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.messages}>
        <Routes>
          {users.map(({ id, messages, name }) => (
            <Route
              key={uuid()}
              path={id}
              element={
                <Messages key={uuid()} messages={messages} name={name} />
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

DialogsLayout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      messages: PropTypes.shape({
        user: PropTypes.arrayOf(PropTypes.string),
        me: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ),
};

export default DialogsLayout;
