import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const AuthForm = ({ setNewUser }) => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    setNewUser({ email, password });
    setState({ ...initialState });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Email:
        <input
          type='text'
          value={state.email}
          name='email'
          onChange={onHandleChange}
        />
      </label>
      <label>
        Password:
        <input
          type='text'
          value={state.password}
          name='password'
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Sign up</button>
    </form>
  );
};

export default AuthForm;

// ==========================================================================
// import React, { Component } from "react";

// class AuthForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   onHandleChange = (e) => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = this.state;
//     console.log({ email, password });
//    this.props(setNewUser({ email, password });)
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//   <form onSubmit={this.onHandleSubmit}>
//     <label>
//       Email:
//       <input
//         type='text'
//         value={email}
//         name='email'
//         onChange={this.onHandleChange}
//       />
//     </label>
//     <label>
//       Password:
//       <input
//         type='text'
//         value={password}
//         name='password'
//         onChange={this.onHandleChange}
//       />
//     </label>
//     <button type='submit'>Sign up</button>
//   </form>
//     );
//   }
// }

// export default AuthForm;
