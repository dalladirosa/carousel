import Auth from '@/networks';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery({
    queryKey: ['getUserInfo'],
    queryFn: Auth.getUserInformation,
  });

  const mutation = useMutation({
    mutationFn: Auth.refreshToken,
    onSuccess: ({ access_token, refresh_token }) => {
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      setIsAuthenticated(true);
      setIsLoading(true);
    },
  });

  useEffect(() => {
    if (query.isError && query.error.status === 401) {
      mutation.mutate();
    }
  }, [query.isError, query.error]);

  useEffect(() => {
    const checkAuth = () => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        setIsAuthenticated(false);
        setIsLoading(false);
      } else {
        setIsAuthenticated(true);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, signOut };
};

export default useAuth;
