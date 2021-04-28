import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import LikeBtn from '../../components/like/LikeBtn';
import LikeCounters from '../../components/like/LikeCounters';
import { likeDiary, initializeLike, checkLike, dislikeDiary, likeList } from '../../modules/like';

const LikeBtnContainer = () => {
    const dispatch = useDispatch();
    const { like, likes, user, diary } = useSelector(({ likeReducer, userReducer, diaryReducer}) => ({
        like: likeReducer.like,
        likes: likeReducer.likes,
        user: userReducer.user,
        diary: diaryReducer.diary
    }))

    useEffect(() =>{
        dispatch(initializeLike());
        if (!user || !diary) return;
        const userId = user._id;
        const diaryId = diary._id; 
        console.log("checkLike: ", userId, diaryId);
        dispatch(checkLike({ userId, diaryId }))
        dispatch(likeList(diaryId))
    }, [dispatch, diary, user]);

    const onLike = () => {
        if (!user || !diary) return;
        const userId = user._id;
        const diaryId = diary._id; 
        console.log("Like: ", userId, diaryId)
        dispatch(likeDiary({ userId, diaryId }));
    };

    const onDislike = () => {
        if (!user || !diary) return;
        const userId = user._id;
        const diaryId = diary._id; 
        console.log("dislike: ", userId, diaryId)
        dispatch(dislikeDiary({ userId, diaryId }))
    }
    const onLikeList = () => {
        console.log(likes);
    };
    return (
        <>
            <LikeBtn like={like} onLike={onLike} onDislike={onDislike}></LikeBtn>
            <LikeCounters likes={likes} onLikeList={onLikeList}/>
        </>
    )
}

export default LikeBtnContainer
