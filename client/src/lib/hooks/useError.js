import { useEffect } from 'react';
import { useState } from 'react';


export const checkRegisterInputError = (name, value, password = null) => {
    const checkRegex = (value) => {
        const regex = /^[가-힣|a-z|A-Z|0-9|]+$/;
        const result = regex.test(value);
        return result ? true : false;
    }
    /*
        현재 value 길이가 범위에 유효한지 체크하는 함수.
        반환값: true / null;
    */
    const checkLength = (value, minLength, maxLangth, alphaCnt = 1) => {
        let i;
        let b;
        let c;
        if (value !== undefined && value !== "") {
            for (b = i = 0; (c = value.charCodeAt(i++)); b += c >> 7 ? alphaCnt * 2 : alphaCnt);
            if (b > maxLangth || b < minLength) return false;
            else return true;
        } 
        else return true;
    }
    const checkIfError = (name, value) => {
        switch(name) {
            case "userId":
                if (value.length === 0) return null;
                if (checkLength(value, 4, 16, 1) === false) return true;
                if (checkRegex(value) === false) return true;
                return null;
            case "password":
                if (value.length === 0) return null;
                if (value.length < 6 || value.length > 24) return true;
                else return null;
            case "passwordConform":
                if (value.length === 0) return null;
                if (value.length < 6 || value.length > 24) return true;
                if (password !== value) return true;
                else return null;
            case "nickname":
                if (value.length === 0) return null;
                if (checkLength(value, 2, 8, 0.5) === false) return true;
                if (checkRegex(value) === false) return true;
                return null;
            default: return null;
        }
    }
    return checkIfError(name, value);
} 

export const useCheckRegisterError = (inputs, setIsErrorEvent) => {
    const { userId, password, passwordConform, nickname } = inputs;
    useEffect(() => {
        setIsErrorEvent(state => ({
            ...state,
            userId: checkRegisterInputError('userId', userId)
        }))
    }, [userId, setIsErrorEvent])
    useEffect(() => {
        setIsErrorEvent(state => ({
            ...state,
            password: checkRegisterInputError('password', password),
            passwordConform: checkRegisterInputError('passwordConform', passwordConform, password)
        }))
    }, [password, passwordConform, setIsErrorEvent])
    useEffect(() => {
        setIsErrorEvent(state => ({
            ...state,
            nickname: checkRegisterInputError('nickname', nickname)
        }))
    }, [nickname, setIsErrorEvent])
    return {}; 
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
            setIsErrorEvent(state => ({
                ...state,
                userId: (type === 'username') ? true : null,
                password: (type === 'password') ? true: null
            }))
            // 서버가 열리지 않거나, 준비 중일 경우 브라우저에서 500 상태 코드 에러 반환됨.
            if (storeError.request.status === 500) {
                setError('서버 측에서 오류가 발생했어요! 😂');
                return;
            }
            setError(message);
            if (storeError.request.status === 409) return setError(`이미 사용중인 ID에요! 😥`);
            if (!error) setError('다시 한 번 시도해주세요! 🥺');
            return; 
        }
    },[storeError, error])

    return { error, setError, isErrorEvent, setIsErrorEvent };
}

export default useError;