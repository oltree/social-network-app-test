import UserCard from "../UserCard";

import styles from "./index.module.scss";

const UsersLayout = ({
  users,
  onGetUsers,
  data,
  isLoading,
  error,
  onAddFollow,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Users:</h1>
      <div className={styles.usersContainer}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.data?.items?.map(({ id, name, status, followed, photos }) => (
            <UserCard
              id={id}
              name={name}
              key={id}
              status={status}
              followed={followed}
              photos={photos}
              className={styles.userCard}
              onAddFollow={onAddFollow}
            />
          ))
        )}
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default UsersLayout;
