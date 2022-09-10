import { useDispatch, useSelector } from "react-redux";

import UsersLayout from "../components/UsersLayout";

import { usersSelector } from "../selectors";

import { useFetching } from "../../../hooks/useFetching";

import { getUsers } from "../api";

import { GET_USERS } from "../actions";

const UsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  const { data, isLoading, error } = useFetching(getUsers, {});

  const handleGetUsers = () => {
    dispatch(GET_USERS());
  };

  return (
    <UsersLayout
      users={users}
      data={data}
      isLoading={isLoading}
      error={error}
      onGetUsers={handleGetUsers}
    />
  );
};

export default UsersContainer;
