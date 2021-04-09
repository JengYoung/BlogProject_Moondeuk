import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Diary from '../../../components/read/Diary'
import { readDiary } from '../../../modules/diary';

const DairyContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { diary, diaryError } = useSelector(({diaryReducer}) => ({
        diary: diaryReducer.diary,
        diaryError: diaryReducer.diaryError,
    }));

    const {diaryId} = match.params;
    console.log("id: ", diaryId)

    useEffect(() => {
        dispatch(readDiary(diaryId));
    }, [dispatch, diaryId])
    return (
        <Diary diary={diary} dairyError={diaryError}/>
    )
}

export default withRouter(DairyContainer);
