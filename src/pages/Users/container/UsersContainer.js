import { useDispatch, useSelector } from "react-redux";

import UsersLayout from "../components/UsersLayout";

import { usersSelector } from "../selectors";

import { GET_USERS } from "../actions";

const UsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  const handleGetUsers = () => {
    dispatch(GET_USERS);
  };

  return <UsersLayout users={users} onGetUsers={handleGetUsers} />;
};

export default UsersContainer;
