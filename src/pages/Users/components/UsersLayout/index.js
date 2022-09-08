const UsersLayout = ({ users, onGetUsers }) => {
  return (
    <div>
      <h1>UsersLayout</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.firstName}</div>
        ))}
      </div>
      <button onClick={onGetUsers}>Add User</button>
    </div>
  );
};

export default UsersLayout;
