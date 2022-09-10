import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UsersLayout from "../components/UsersLayout";

import { usersSelector } from "../selectors";

import { GET_USERS } from "../actions";
import { BASE_URL } from "../api/config";

const UsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  const [usersGet, setUsersGet] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await fetch(`${BASE_URL}/users`).then((response) =>
          response.json()
        );

        setUsersGet(data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleGetUsers = () => {
    dispatch(GET_USERS());
  };

  return (
    <UsersLayout
      users={users}
      usersGet={usersGet}
      isLoading={isLoading}
      error={error}
      onGetUsers={handleGetUsers}
    />
  );
};

export default UsersContainer;
