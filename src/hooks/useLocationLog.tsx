import { commonAxios } from 'api/commonAxios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLocationLog = () => {
  const location = useLocation();

  useEffect(() => {
    const user_uuid = localStorage.getItem('uuid');

    commonAxios({
      url: 'post_location_log.php',
      method: 'GET',
      params: { user_uuid: user_uuid ?? '-1', path: location.pathname },
    }).then((res) => {
      console.log(res);
    });
  }, [location.pathname]);

  return null;
};

export default useLocationLog;
