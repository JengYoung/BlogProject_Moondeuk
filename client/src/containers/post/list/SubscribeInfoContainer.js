import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import UserInfo from '../../../components/common/UserInfo';
import SubscribeInfo from '../../../components/list/SubscribeInfo';
import { alertUser } from '../../../modules/alert';
import { checkSubscribe, initializeSubscribe, subscribeUser, unSubscribeUser } from '../../../modules/subscribe';
import { getSubscribeList, getSubscribedList } from '../../../modules/subscribeList';

function SubscribeInfoContainer({ match }) {
    const { authorId } = match.params ? match.params : null;
    // console.log("authorId: ", authorId)
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

    const userId = user ? user.userId : null;
    const user_id = user ? user._id : null;

    /*
        return true if unSubscribe yet
    */
    useEffect(() => {
        dispatch(getSubscribeList({ authorId }));
        dispatch(getSubscribedList({ authorId }));
    }, [dispatch, authorId, subscribe]);

    /*
        before unMount => initialize Subscribe state
    */ 
    useEffect(() => {
        if (!userId) return;
        // const check = { subscribeTo: authorId, subscribedFrom: userId }
        // console.log("check: ", check);
        dispatch(checkSubscribe({ subscribeTo: authorId, subscribedFrom: userId}));
        return () => dispatch(initializeSubscribe());
    }, [dispatch, authorId, userId])

    /* 
        if subscribe -> return, unSubscribe -> dispatch
    */
    const onSubscribe = () => {
        try {
            if (!userId) return alert('로그인 후 구독 가능합니다.')
            if (authorId === userId) return alert('자신은 구독할 수 없습니다.')
            dispatch(subscribeUser({ subscribeTo: authorId, subscribedFrom: user.userId }));
            /* 
                [server] findById(authorId) -> return user nickname (params to enter user's blog)
            */
            dispatch(alertUser({ sender_id: user_id, receiver_id: authorId, type: "Subscribe", type_detail: authorId })); 
            return;
        } catch(e) {
            alert(e);
        }
    };

    const onGetSubscribeList = () => {
        if (subscribeList.subscribeToList.length === 0) return;
        setModal(true);
        setIsSubscribeList(true);
    }

    const onGetSubscribedList = () => {
        if (subscribedList.subscribedFromList.length === 0) return;
        setModal(true);
        setIsSubscribeList(false);
    }

    const onConfirm = () => {
        return setModal(false);
    }

    const onUnSubscribe = () => {
        const { subscribeTo, subscribedFrom } = subscribe;
        return dispatch(unSubscribeUser({ subscribeTo, subscribedFrom }));
    }

    return (
        <>
            { authorId && <UserInfo propId={authorId}></UserInfo> }
            { authorId && <SubscribeInfo 
                authorId={authorId}
                subscribe={subscribe} 
                onSubscribe={onSubscribe} 
                onUnSubscribe={onUnSubscribe} 
                subscribeError={subscribeError}
                subscribeListError={subscribeListError}
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
