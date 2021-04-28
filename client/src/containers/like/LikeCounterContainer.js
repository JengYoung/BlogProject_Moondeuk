import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LikeCounter from '../../components/like/LikeCounter';
import { likeList } from '../../modules/like';

function LikeCounterContainer() {
    const [ modal, setModal ] = useState(false);
    const dispatch = useDispatch();
    const { likes, diary } = useSelector(({ likeReducer, diaryReducer }) => ({ 
        likes : likeReducer.likes,
        diary: diaryReducer.diary,
    }));

    useEffect(() => {
        if (!diary) return;
        const diaryId = diary._id;
        dispatch(likeList(diaryId));
    }, [dispatch, diary])

    const onLikeList = () => {
        setModal(!modal);
    };
    return (
        <LikeCounter modal={modal} likes={likes} onLikeList={onLikeList}/>
    )
}

export default LikeCounterContainer
