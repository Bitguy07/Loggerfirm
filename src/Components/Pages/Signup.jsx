import React, { useReducer, useState} from "react";
import { useNavigate } from "react-router-dom";
import { authData } from "../../Authentication/AuthWrapper";

// Initial state for the login form
const initialState = {
  name: "",
  username: "",
  password: "",
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const LoginPage = () => {

  const navigate = useNavigate();
  const {Signup, errorStatus} = authData();
  const [state, dispatch] = useReducer(reducer, initialState);

  const doSignup = async (e) => {
    e.preventDefault();
    await Signup(state.name, state.username, state.password);
  }

  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-100">
      <form
        onSubmit={doSignup}
        className="w-full max-w-sm px-6 bg-white rounded-md py-3 shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 ">
          Signup
        </h2>

          {/* name Field */}
          <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Username Field */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="username"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "SET_USERNAME", payload: e.target.value })
            }
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Singup
        </button>
        { errorStatus ? <div
          type="submit"
          className="w-full px-4 py-2 mt-1 text-white text-center bg-red-600 rounded-md focus:outline-none"
        >
          {errorStatus}
        </div> : null }
      </form>
    </div>
  );
};

export default LoginPage;
