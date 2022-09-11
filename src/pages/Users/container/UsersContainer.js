import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import UsersLayout from "../components/UsersLayout";

import { usersSelector } from "../selectors";

import { useFetching } from "../../../hooks/useFetching";

import { getUsers } from "../api";

import { GET_USERS, FOLLOW_UNFOLLOW } from "../actions";

const UsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  const { data, isLoading, error } = useFetching(getUsers, {});

  const handleGetUsers = () => {
    dispatch(GET_USERS());
  };

  const handleAddFollow = useCallback(() => {
    dispatch(FOLLOW_UNFOLLOW);
  }, [dispatch]);

  console.log(data);
  return (
    <UsersLayout
      users={users}
      data={data}
      isLoading={isLoading}
      error={error}
      onGetUsers={handleGetUsers}
      onAddFollow={handleAddFollow}
    />
  );
};

export default UsersContainer;
