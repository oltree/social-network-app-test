import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Dialogs from "../Dialogs";
import ListMessages from "../ListMessages";

import styles from "./index.module.scss";

const DialogsLayout = ({
  users,
  messages,
  messageText,
  onFormChange,
  onMessageCreate,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {users.map(({ id, name }) => (
          <Dialogs key={id} id={id} name={name} />
        ))}
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.messages}>
        <Routes>
          {users.map(({ id, userMessages, name }) => (
            <Route
              key={id}
              path={id}
              element={
                <ListMessages
                  userMessages={userMessages}
                  name={name}
                  messages={messages}
                  messageText={messageText}
                  onFormChange={onFormChange}
                  onMessageCreate={onMessageCreate}
                />
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
      messages: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default DialogsLayout;
