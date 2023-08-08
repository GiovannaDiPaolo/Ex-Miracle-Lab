import { useState, useEffect } from 'react';

// Define la interfaz para los datos
interface DataResponse<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

// Modifica la función useFetchData sin función flecha
export function useFetchData<T>(url: string): DataResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error occurred while fetching data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}


