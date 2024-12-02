import { useState, useEffect } from "react";
import axios from 'axios';

const useNfts = () => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNfts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/nfts/fetch/all_nfts');
                setNfts(response.data.nfts);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchNfts();
    }, []);

    return { nfts, loading, error };
}

export default useNfts;