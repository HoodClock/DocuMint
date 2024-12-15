import { useState, useEffect } from "react";
import axios from 'axios';

const useFetchedDocuments = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/documents/allDocuments/fetched-documents', { withCredentials: true });
                setDocuments(response.data?.data || []); // Ensure `data` is handled properly
            } catch (error) {
                console.error("Error fetching documents", error);
            } finally {
                setLoading(false); // Ensure loading is stopped even if there's an error
            }
        };

        fetchDocuments();
    }, []);

    return { documents, loading };
};

export default useFetchedDocuments;
