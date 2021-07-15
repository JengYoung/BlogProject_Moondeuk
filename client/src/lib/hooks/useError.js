import { useEffect } from 'react';
import { useState } from 'react';

/**
 * storeSuccess: 성공했을 경우
 * storeError: useSelector을 통해 store에서 갖고 온 error
 * successCallback: 
 */ 

const useError = (storeError) => {
    const [ error, setError ] = useState(null);
    
    /* login - valid user data check */ 
    useEffect(() => {
        if (storeError) {
            // 서버가 열리지 않거나, 준비 중일 경우 브라우저에서 500 상태 코드 에러 반환됨.
            if (storeError.request.status === 500) {
                setError('서버 측에서 오류가 발생했어요! 😂');
                return;
            }
            setError(storeError.response.data);
            return; 
        }
    },[storeError])

    return error;
}

export default useError;