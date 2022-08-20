import DialogsLayout from "../components/DialogsLayout";

import { mockMessages, mockUsers } from "../mock";

const DialogsContainer = () => {
  return <DialogsLayout users={mockUsers} messages={mockMessages} />;
};

export default DialogsContainer;
