import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const useVerifyUser = () => {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const verifyUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/visiting/dashboard', { withCredentials: true });

                setUserData(response.data);
            } catch (error) {
                navigate('/login');
            }
        }

        verifyUser();

    }, [navigate]);

    return userData;
}

export default useVerifyUser;