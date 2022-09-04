import { memo } from "react";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import styles from "./index.module.scss";

const FormForCreatingPostOrMessage = ({
  postText,
  onPostCreate,
  onFormChange,
}) => {
  return (
    <form className={styles.form} onSubmit={onPostCreate}>
      <textarea
        rows={3}
        className={styles.textarea}
        name="postText"
        value={postText}
        placeholder="Post..."
        onChange={onFormChange}
      />
      <div className={styles.buttonContainer}>
        <Button
          type="submit"
          endIcon={<SendIcon />}
          sx={{ border: "1px solid #564" }}
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default memo(FormForCreatingPostOrMessage);
