import { useEffect } from 'react';
import { useState } from 'react';

/**
 * storeSuccess: 성공했을 경우
 * storeError: useSelector을 통해 store에서 갖고 온 error
 * successCallback: 
 */ 
export const createLoginErrorMessage = () => {

}
const useError = (storeError) => {
    /*
        error: 최종 에러 메시지 전달
    */ 
    const [ error, setError ] = useState(null);

    /*
        클라이언트 측에서 오류에 따른 이벤트를 위해 설정
    */ 
    const [isErrorEvent, setIsErrorEvent] = useState(() => ({
        userId: null,
        password: null,
    }));

    /* login - valid user data check */ 
    useEffect(() => {
        if (storeError) {
            const { type, message } = storeError.response.data;
            // 서버가 열리지 않거나, 준비 중일 경우 브라우저에서 500 상태 코드 에러 반환됨.
            if (storeError.request.status === 500) {
                setError('서버 측에서 오류가 발생했어요! 😂');
                return;
            }
            setError(message);
            setIsErrorEvent(state => ({
                ...state,
                userId: (type === 'username') ? true : null,
                password: (type === 'password') ? true: null
            }))
            return; 
        }
    },[storeError])

    return { error, setError, isErrorEvent, setIsErrorEvent };
}

export default useError;