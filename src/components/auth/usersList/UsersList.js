import React from "react";

const UsersList = ({ users, setProfileOpen, getUserById, deleteUserById }) => {
    
  const openProfile = (e) => {
    setProfileOpen(true);
    const id = e.target.dataset.id;
    getUserById(id);
  };

  const deleteUser = (e) => {
    const id = e.target.dataset.id;
    deleteUserById(id)
  }

  return (
    <>
      <h2>Users info</h2>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid black",
            }}>
            <span>Email: {user.email}</span>
            <br />
            <span>Password: {user.password}</span>
            <br />
            <button type='button' data-id={user.id} onClick={openProfile}>
              Edit
            </button>
            <button type='button' data-id={user.id} onClick={deleteUser}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
