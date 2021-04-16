import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import SubscribeInfo from '../../../components/list/SubscribeInfo';
import { checkSubscribe, initializeSubscribe, subscribeUser, unSubscribeUser } from '../../../modules/subscribe';

function SubscribeInfoContainer({ authorId }) {
    // const [ isSubscribe, setIsSubscribe ] = useState(false);
    const dispatch = useDispatch();
    const { user, subscribe, subscribeError } = useSelector(({ userReducer, subscribeReducer }) => ({
        user: userReducer.user,
        subscribe: subscribeReducer.subscribe,
        subscribeError: subscribeReducer.subscribeError,
    }));

    /*
        return true if unSubscribe yet
    */
    useEffect(() => {
        if (!user) return;
        const check = { subscribeTo: authorId, subscribedFrom: user.userId }
        const userId = user.userId;
        console.log("check: ", check);
        dispatch(checkSubscribe({ subscribeTo: authorId, subscribedFrom: userId}));
    }, [dispatch, authorId, user]);

    useEffect(() => {
        return () => dispatch(initializeSubscribe());
    }, [dispatch])
    /* 
        if subscribe -> return, unSubscribe -> dispatch
    */
    const onSubscribe = () => {
        try {
            if (!user) return alert('로그인 후 구독 가능합니다.')
            if (authorId === user.userId) return alert('자신은 구독할 수 없습니다.')
            dispatch(subscribeUser({ subscribeTo: authorId, subscribedFrom: user.userId }));
            // if (subscribe) setIsSubscribe(true);
            return;
        } catch(e) {
            alert(e);
        }
    };

    const onUnSubscribe = () => {
        const { subscribeTo, subscribedFrom } = subscribe;
        console.log(subscribe, subscribedFrom, "여기")
        return dispatch(unSubscribeUser({ subscribeTo, subscribedFrom }));
    }

    return (
        <SubscribeInfo 
            authorId={authorId}
            subscribe={subscribe} 
            onSubscribe={onSubscribe} 
            onUnSubscribe={onUnSubscribe} 
            subscribeError={subscribeError}
        />
    )
}
export default withRouter(SubscribeInfoContainer)
