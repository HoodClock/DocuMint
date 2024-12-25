import { useState, useEffect } from "react";
import axios from 'axios';

const useFetchQuests = () => {
    const [quests, setQuests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuests = async () => {

            try {
                const response = await axios.get("http://localhost:3000/api/quests/user/quests", { withCredentials: true });
                setQuests(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchQuests();

    }, []);

    return { quests, loading, error };
}

export default useFetchQuests;