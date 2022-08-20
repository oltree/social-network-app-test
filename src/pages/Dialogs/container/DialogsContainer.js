import DialogsLayout from "../components/DialogsLayout";

import { allProjectData } from "../../../static/allProjectData";

const DialogsContainer = () => {
  return <DialogsLayout users={allProjectData.messagesPage?.users} />;
};

export default DialogsContainer;
