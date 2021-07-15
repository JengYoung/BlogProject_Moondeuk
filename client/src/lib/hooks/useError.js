import { useEffect } from 'react';
import { useState } from 'react';


export const checkRegisterInputError = (inputs, name, value, setIsErrorEvent) => {
    const { password, passwordConform } = inputs;
    const getByteLength = (value, minLength, maxLangth, alphaCnt = 1) => {
        let i;
        let b;
        let c;
        if (value !== undefined && value !== "") {
            for (b = i = 0; c = value.charCodeAt(i++); b += c >> 7 ? alphaCnt * 2 : alphaCnt);
            console.log(b);
            if (b > maxLangth || b < minLength) return true;
            else return null;
        } 
        else return null;
    }
    const checkIfError = (name, value) => {
        switch(name) {
            case "userId":
                return getByteLength(value, 4, 16, 1);
            case "password":
                if (value.length > 24 || value.length < 6) return true;
                else return null;
            case "passwordConform":
                if (password !== passwordConform) return true;
                else return null;
            case "nickname":
                return getByteLength(value, 2, 8, 0.5);
            default: return null;
        }
    }
    setIsErrorEvent(state => name === 'password' ? ({
        ...state,
        [name]: checkIfError(name, inputs[name]),
        passwordConform: value === passwordConform ? null : true,
    }) : ({
        ...state,
        [name]: checkIfError(name, inputs[name])
    }))
} 
/**
 * storeError: useSelector을 통해 store에서 갖고 온 error
 */ 
const useError = (storeError) => {
    /*
        error: 최종 에러 메시지 전달
    */ 
    const [ error, setError ] = useState(null);

    /*
        isErrorEvent: 클라이언트 측에서 오류에 따른 이벤트를 위해 설정
    */ 
    const [isErrorEvent, setIsErrorEvent] = useState(() => ({
        userId: null,
        password: null,
        passwordConform: null,
        nickname: null,
    }));

    /* 
        StoreError가 발생했을 시 반응하여 처리 
        !(validator은 Success에서 에러를 받음) 
    */ 
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