import React, { useState, Component } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  password: "",
  id: "",
};

class Profile extends Component {
  state = {
    user: {
      ...initialState,
      ...this.props.userById,
    },
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  onHadleSubmit = (e) => {
    e.preventDefault();
    this.props.setProfileOpen(false);
    this.props.setUsers([
      ...this.props.users.map((item) =>
        item.id === this.state.user.id ? { ...this.state.user } : item
      ),
    ]);
  };

  render() {
    return (
      <>
        <h2>Profile</h2>
        <form
          onSubmit={this.onHadleSubmit}
          style={{ display: "flex", flexDirection: "column" }}>
          <label>
            First name:
            <input
              type='text'
              name='firstName'
              value={this.state.user.firstName}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Last name:
            <input
              type='text'
              name='lastName'
              value={this.state.user.lastName}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={this.state.user.email}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Password:
            <input
              type='text'
              name='password'
              value={this.state.user.password}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Gender:
            <select
              name='gender'
              value={this.state.user.gender}
              onChange={this.onHandleChange}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </label>
          <button type='submit'>Save</button>
        </form>
      </>
    );
  }
}

export default Profile;

// const initialState = {
//   firstName: "",
//   lastName: "",
//   gender: "",
//   email: "",
//   password: "",
//   id: "",
// };

// const Profile = ({ userById, setProfileOpen, setUsers, users }) => {
//   const [user, setUser] = useState({ ...initialState, ...userById });

//   const onHandleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const onHadleSubmit = (e) => {
//     e.preventDefault();
//     setProfileOpen(false);
//     setUsers([
//       ...users.map((item) => (item.id === user.id ? { ...user } : item)),
//     ]);
//   };

//   return (
//     <>
//       <h2>Profile</h2>
//       <form
//         onSubmit={onHadleSubmit}
//         style={{ display: "flex", flexDirection: "column" }}>
//         <label>
//           First name:
//           <input
//             type='text'
//             name='firstName'
//             value={user.firstName}
//             onChange={onHandleChange}
//           />
//         </label>
//         <label>
//           Last name:
//           <input
//             type='text'
//             name='lastName'
//             value={user.lastName}
//             onChange={onHandleChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type='text'
//             name='email'
//             value={user.email}
//             onChange={onHandleChange}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type='text'
//             name='password'
//             value={user.password}
//             onChange={onHandleChange}
//           />
//         </label>
//         <label>
//           Gender:
//           <select name='gender' value={user.gender} onChange={onHandleChange}>
//             <option value='male'>Male</option>
//             <option value='female'>Female</option>
//           </select>
//         </label>
//         <button type='submit'>Save</button>
//       </form>
//     </>
//   );
// };

// export default Profile;
