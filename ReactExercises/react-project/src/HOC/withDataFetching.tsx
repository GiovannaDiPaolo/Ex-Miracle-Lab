import React, { ComponentType, useEffect, useState } from 'react';

interface DataFetchingProps<T> {
  data: T[];
  error: boolean;
  loading: boolean;
}

const withDataFetching = <T extends unknown>(
  WrappedComponent: ComponentType<DataFetchingProps<T>>,
  url: string
) => {
  const WithDataFetching: React.FC = () => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

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

    return <WrappedComponent data={data} error={error} loading={loading} />;
  };

  return WithDataFetching;
};

export default withDataFetching;
