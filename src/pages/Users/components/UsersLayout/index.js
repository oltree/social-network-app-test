const UsersLayout = ({ users, onGetUsers, usersGet, isLoading, error }) => {
  return (
    <div>
      <h1>Users</h1>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          usersGet.map((user) => <div key={user.id}>{user.name}</div>)
        )}
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default UsersLayout;
