import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import LikeBtn from '../../components/like/LikeBtn';
import { likeDiary, initializeLike, checkLike } from '../../modules/like';

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
        console.log(userId, diaryId)
        dispatch(likeDiary({userId, diaryId}));
    };

    return (
        <div>
            <LikeBtn onLike={onLike} like={like}>나야나</LikeBtn>
        </div>
    )
}

export default LikeBtnContainer
