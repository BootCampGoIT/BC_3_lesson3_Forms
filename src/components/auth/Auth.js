import React, { useState, Component } from "react";
import AuthForm from "./authForm/AuthForm";
import Profile from "./profile/Profile";
import UsersList from "./usersList/UsersList";
import { v4 as uuidv4 } from "uuid";

class Auth extends Component {
  state = {
    users: [],
    isProfileOpen: false,
    user: {},
  };

  setNewUser = (user) => {
    this.setState((prev) => ({
      users: [...prev.users, { ...user, id: uuidv4() }],
    }));
  };

  getUserById = (id) => {
    const userById = this.state.users.find((user) => user.id === id);
    this.setState({ user: { ...userById } });
  };

  deleteUserById = (id) => {
    this.setState({
      users: [...this.state.users.filter((user) => user.id !== id)],
    });
  };

  setProfileOpen = (flag) => {
    this.setState({ isProfileOpen: flag });
  };
  setUsers = (users) => {
    this.setState({ users: [...users] });
  };

  render() {
    return (
      <>
        <AuthForm setNewUser={this.setNewUser} />

        <UsersList
          users={this.state.users}
          setProfileOpen={this.setProfileOpen}
          getUserById={this.getUserById}
          deleteUserById={this.deleteUserById}
        />

        {this.state.isProfileOpen && (
          <Profile
            setProfileOpen={this.setProfileOpen}
            userById={this.state.user}
            setUsers={this.setUsers}
            users={this.state.users}
          />
        )}
      </>
    );
  }
}

export default Auth;


// ===================== with hooks ========================================

// const Auth = () => {
//   const [users, setUsers] = useState([]);
//   const [isProfileOpen, setProfileOpen] = useState(false);
//   const [user, setUser] = useState({});

//   const setNewUser = (user) => {
//     setUsers((prev) => [...prev, { ...user, id: uuidv4() }]);
//   };

//   const getUserById = (id) => {
//     const userById = users.find((user) => user.id === id);
//     setUser({ ...userById });
//   };

//   const deleteUserById = (id) => {
//     setUsers([...users.filter((user) => user.id !== id)]);
//   };

//   return (
//     <>
//       <AuthForm setNewUser={setNewUser} />

//       <UsersList
//         users={users}
//         setProfileOpen={setProfileOpen}
//         getUserById={getUserById}
//         deleteUserById={deleteUserById}
//       />

//       {isProfileOpen && (
//         <Profile
//           setProfileOpen={setProfileOpen}
//           userById={user}
//           setUsers={setUsers}
//         />
//       )}
//     </>
//   );
// };

// export default Auth;
