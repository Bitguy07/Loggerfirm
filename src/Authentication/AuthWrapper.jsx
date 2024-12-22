import { createContext, useContext, useState, useEffect } from "react";
import Header from "../Components/Structure/Header";
import { RenderMenu, RenderRoutes } from "../Components/Structure/RenderNavigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;
const origin = import.meta.env.VITE_ORIGIN;
const AuthContext = createContext(null);
export const authData = () => useContext(AuthContext);

const AuthWrapper = () => {
    const [user, setUser] = useState({ name: "", isAuthenticated: false });
    const [signupData, setSignupData] = useState(null); // Holds data for signup API
    const [loginData, setLoginData] = useState(null); // Holds data for login API
    const [loading, setLoading] = useState(false);
    const [errorStatus, setErrorStatus] = useState(null);
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    const navigate = useNavigate();

    // Handle Signup API calls
    useEffect(() => {
        if (!signupData) return; // Prevent API call if no data

        const performSignup = async () => {
            setLoading(true);
            try {
            const response = await axios.post(`${origin}signup`, signupData);
                setLoading(false);

                if (response.data.Status === "Success") {
                    navigate("/login");
                    setErrorStatus(null);
                } else {
                    throw new Error(response.data.Error || "Signup failed");
                }
            } catch (error) {
                setLoading(false);
                setErrorStatus(error.message);
                navigate("/login");
            }
        };

        performSignup();
    }, [signupData]);

    // Handle Login API calls
    useEffect(() => {
        if (!loginData) return; // Prevent API call if no data

        const performLogin = async () => {
            setLoading(true);
            try {
                const response = await axios.post(`${origin}login`, loginData);
                setLoading(false);

                if (response.data.Status === "Success") {
                    setUser({ name: loginData.username, isAuthenticated: response.data.isAuthenticated });
                    navigate("/account");
                    setErrorStatus(null);
                } else {
                        throw new Error(response.data.Error || "Login failed");
                    
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
                setErrorStatus(error.message);
            }
        };

        performLogin();
    }, [loginData]);

    
    const HandleLogout = async () =>{
        try{
            const response = await axios.post(`${origin}logout`);
                
            if (response.data.Status === 'Logged out'){

                //Clear any client-side state related to the user
                setUser ({ name: '', isAuthenticated: false });

                //Redirect to the home page 
                navigate('/');
            }
        }catch (error){
            console.log('Error during logout:', error);
        }
    }
        

    //Varify if user is authenticated with the help of cookies  
    useEffect(() => {
        const verifyAuthtoken = async () => {
            try {
                const response = await axios.get(`${origin}`);
                if (response.data.Status === 'Success') {

                    setUser({ name: response.data.username, isAuthenticated: true });
                }else if ( response.data.Error === 'Token Expired') {
                    console.log('Please login again, Your session has expired.');
                    setUser({ name: '', isAuthenticated: false });
                    navigate('/');

                }else{
                    return;
                }
            }catch (error){
                console.log('Error during verification:', error);
            }
        }

        verifyAuthtoken();
    }, []);

    // useEffect(() => {
    //     const fetchQrCode = async () => {
    //       try {
    //         const response = await axios.get(`${origin}create_qr`);
    //         setQrCodeUrl(response.data.image_url); // Razorpay's QR code image URL
    //       } catch (error) {
    //         console.error("Error fetching QR code:", error);
    //       }
    //     };
    
    //     fetchQrCode();
    // }, []);


    // Event handlers for initiating signup and login
    const handleSignup = (name, username, password) => {
        setSignupData({ name, username, password });
    };

    const handleLogin = (username, password) => {
        setLoginData({ username, password });
    };



    return (
        <AuthContext.Provider value={{ user, Signup: handleSignup, logout: HandleLogout , login: handleLogin, loading, errorStatus, qrCodeUrl }}>
            <Header />
            <RenderMenu />
            <RenderRoutes />
        </AuthContext.Provider>
    );
};

export default AuthWrapper;
