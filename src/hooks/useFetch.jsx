import { useState, useEffect } from 'react';

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;
 
  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData.results || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchMovie();
  }, [url]);

  return { data };
};

export default useFetch;