import { useDispatch, useSelector } from "react-redux";

import DialogsLayout from "../components/DialogsLayout";

import { messagesSelector } from "../selectors";

import { useForm } from "../../../hooks";

import { users } from "../mock";

import { CREATE_MESSAGE } from "../actions";

const DialogsContainer = () => {
  const dispatch = useDispatch();

  const messages = useSelector(messagesSelector);

  const [formData, handleFormChange, handleFormReset] = useForm({
    messageText: "",
  });

  const handleMessageCreate = (event) => {
    event.preventDefault();

    dispatch(CREATE_MESSAGE(formData.messageText));

    handleFormReset();
  };

  return (
    <DialogsLayout
      users={users}
      messages={messages}
      messageText={formData.messageText}
      onFormChange={handleFormChange}
      onMessageCreate={handleMessageCreate}
    />
  );
};

export default DialogsContainer;
