import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import LikeBtn from '../../components/like/LikeBtn';
import { likeDiary, initializeLike, checkLike, dislikeDiary } from '../../modules/like';

const LikeBtnContainer = () => {
    const dispatch = useDispatch();
    const { like, user, diary } = useSelector(({ likeReducer, userReducer, diaryReducer}) => ({
        like: likeReducer.like,
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

    return (
        <div>
            <LikeBtn like={like} onLike={onLike} onDislike={onDislike}></LikeBtn>
        </div>
    )
}

export default LikeBtnContainer
