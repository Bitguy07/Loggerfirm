import { useNavigate } from "react-router-dom";
import { authData } from "../../Authentication/AuthWrapper"; 


const Account = () => {

    const { user, logout } = authData();
    const navigate = useNavigate();

    const logOut = () => {
        logout();
    }

    return(
        <div className="flex items-center justify-center h-full w-full bg-gray-100">
        <div
          className="w-full max-w-sm px-12 py-20 bg-white rounded-md shadow-md"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Account
          </h2>
  
          {/* Username Field */}
          <div className="mb-10">
            <div
              className="block text-sm font-medium text-center text-gray-700"
            >
              {user.name}
            </div>
          </div>
  
          {/* Logout Button */}
          <button
            onClick={logOut}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Logout
          </button>
        </div>
      </div>
    )
}
export default Account;