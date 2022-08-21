import DialogsLayout from "../components/DialogsLayout";

import { data } from "../../../static/Data";

const DialogsContainer = () => {
  return <DialogsLayout users={data.messagesPage?.users} />;
};

export default DialogsContainer;
