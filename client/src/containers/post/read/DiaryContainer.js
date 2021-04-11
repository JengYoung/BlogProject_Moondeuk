import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Diary from '../../../components/read/Diary'
import { readDiary } from '../../../modules/diary';
import { settingPatch } from '../../../modules/write';

const DiaryContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { diary, diaryError, userId } = useSelector(({diaryReducer, userReducer}) => ({
        diary: diaryReducer.diary,
        diaryError: diaryReducer.diaryError,
        userId: userReducer.user.userId
    }));

    const { diaryId } = match.params;

    useEffect(() => {
        dispatch(readDiary(diaryId));
    }, [dispatch, diaryId])

    const onPatch = () => {
        console.log(diary.title, diary.tags, diary.body);
        dispatch(settingPatch(diary));
        history.push(`/write/@${userId}/${diaryId}`);
    }

    return (
        <Diary diary={diary} dairyError={diaryError} userId={userId} onPatch={onPatch}/>
    )
}

export default withRouter(DiaryContainer);
