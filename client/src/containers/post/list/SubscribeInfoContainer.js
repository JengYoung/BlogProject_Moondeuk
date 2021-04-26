import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import UserInfo from '../../../components/common/UserInfo';
import SubscribeInfo from '../../../components/list/SubscribeInfo';
import { checkSubscribe, initializeSubscribe, subscribeUser, unSubscribeUser } from '../../../modules/subscribe';
import { getSubscribeList, getSubscribedList } from '../../../modules/subscribeList';

function SubscribeInfoContainer({ match }) {
    const { authorId } = match.params ? match.params : null;
    console.log("authorId: ", authorId)
    const [ modal, setModal ] = useState(false);
    const [ isSubscribeList, setIsSubscribeList ] = useState(true);
    const dispatch = useDispatch();
    const { user, 
            subscribe, subscribeError, 
            subscribeList, subscribedList, 
            subscribeListError } = useSelector(({ userReducer, subscribeReducer, subscribeListReducer }) => ({
            user: userReducer.user,
            subscribe: subscribeReducer.subscribe,
            subscribeError: subscribeReducer.subscribeError,
            subscribeList: subscribeListReducer.subscribeList,
            subscribedList: subscribeListReducer.subscribedList,
            subscribeListError: subscribeListReducer.subscribeListError
    }));

    /*
        return true if unSubscribe yet
    */
    useEffect(() => {
        dispatch(getSubscribeList({ authorId }));
        dispatch(getSubscribedList({ authorId }));

        if (!user) return;
        const check = { subscribeTo: authorId, subscribedFrom: user.userId }
        const userId = user.userId;
        console.log("check: ", check);
        dispatch(checkSubscribe({ subscribeTo: authorId, subscribedFrom: userId}));
    }, [dispatch, authorId, user]);

    /*
        before unMount => initialize Subscribe state
    */ 
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
            return;
        } catch(e) {
            alert(e);
        }
    };

    const onGetSubscribeList = () => {
        if (subscribeList.length === 0) return;
        setModal(true);
        setIsSubscribeList(true);
    }

    const onGetSubscribedList = () => {
        if (subscribedList.length === 0) return;
        setModal(true);
        setIsSubscribeList(false);
    }

    const onConfirm = () => {
        return setModal(false);
    }

    const onUnSubscribe = () => {
        const { subscribeTo, subscribedFrom } = subscribe;
        console.log(subscribe, subscribedFrom, "여기")
        return dispatch(unSubscribeUser({ subscribeTo, subscribedFrom }));
    }

    return (
        <>
            { authorId && <UserInfo authorId={authorId}></UserInfo> }
            { authorId && <SubscribeInfo 
                authorId={authorId}
                subscribe={subscribe} 
                onSubscribe={onSubscribe} 
                onUnSubscribe={onUnSubscribe} 
                subscribeError={subscribeError}
                onGetSubscribeList={onGetSubscribeList}
                onGetSubscribedList={onGetSubscribedList}
                subscribeList={subscribeList}
                subscribedList={subscribedList}
                isSubscribeList={isSubscribeList}
                modal={modal}
                onConfirm={onConfirm}
            /> }
        </>
    )
}
export default withRouter(SubscribeInfoContainer)
