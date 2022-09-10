import { useDispatch, useSelector } from "react-redux";

import UsersLayout from "../components/UsersLayout";

import { usersSelector } from "../selectors";

import { useFetching } from "../../../hooks/useFetching";

import { GET_USERS } from "../actions";

import { BASE_URL } from "../api/config";

const UsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  const { data, isLoading, error } = useFetching(
    async () => fetch(`${BASE_URL}/users`).then((response) => response.json()),
    {}
  );

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
