import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Account from "../Pages/Account";
import Signup from "../Pages/Signup";
import PaymentPage from "../Pages/Donation";

const navbar_button = [
  {path: "/",          name: "Home",      element:<Home/>,          isMenu: true,     isPrivate:false },
  {path: "/donation",  name: "Donation",  element:<PaymentPage/>,   isMenu: true,     isPrivate:false },
  {path: "/about",     name: "About",     element:<About/>,         isMenu: true,     isPrivate:false },
  {path: "/signup",    name: "Signup",    element:<Signup/>,        isMenu: false,    isPrivate:false },
  {path: "/login",     name: "Login",     element:<Login/>,         isMenu: false,    isPrivate:false },
  {path: "/account",   name: "Account",   element:<Account/>,       isMenu: true,     isPrivate:true  },

]

export default navbar_button