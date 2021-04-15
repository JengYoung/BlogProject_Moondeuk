import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import SubscribeInfo from '../../../components/list/SubscribeInfo';
import { checkSubscribe, subscribeUser } from '../../../modules/subscribe';

function SubscribeInfoContainer({ match }) {
    const authorId = match.params.userId;
    console.log(`authorId: ${authorId}`)
    const [isSubscribe, setIsSubscribe] = useState(false);  
    const dispatch = useDispatch();
    const { user, subscribe, subscribeError } = useSelector(({ userReducer, subscribeReducer }) => ({
        user: userReducer.user,
        subscribe: subscribeReducer.subscribe,
        subscribeError: subscribeReducer.subscribeError,
    }));

    // return true if unSubscribe yet
    useEffect(() => {
        if (!user) return;
        const { userId } = user;
        const subscribeTo = authorId;
        const subscribedFrom = userId;
        dispatch(checkSubscribe({ subscribeTo, subscribedFrom }));
        // if not exist subscribe value in store -> return
        return setIsSubscribe(true);
    }, [dispatch, authorId, user]);

    // if subscribe -> return, unSubscribe -> dispatch
    const onSubscribe = () => {
        if (isSubscribe) return;
        try {
            if (!user) return alert('로그인 후 구독 가능합니다.')
            const { userId } = user;
            const subscribeTo = authorId;
            const subscribedFrom = userId;
            console.log("여기",{ subscribeTo, subscribedFrom})
            dispatch(subscribeUser({ subscribeTo, subscribedFrom }));
            setIsSubscribe(true);
            return;
        } catch(e) {
            alert(e);
        }
    };

    return (
        ({authorId}) ? <SubscribeInfo isSubscribe={isSubscribe} onSubscribe={onSubscribe} subscribeError={subscribeError}></SubscribeInfo> : null
    )
}

export default withRouter(SubscribeInfoContainer)
