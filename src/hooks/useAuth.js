import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useAuth = () => {
    const { profile } = useSelector(state => state.auth);
    const access_token = profile?.access_token || localStorage.getItem('access_token');
    return useMemo(() => ({ access_token }), [access_token]);
};

export default useAuth;