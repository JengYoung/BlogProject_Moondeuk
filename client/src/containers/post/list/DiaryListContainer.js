import React, { useCallback, useEffect, useRef, useState } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import DiaryCards from '../../../components/list/DiaryList';
import { diaryList } from '../../../modules/diaryList';
import { withRouter } from 'react-router';

function DiaryListContainer({ match, location, isUserPage }) {
    const dispatch = useDispatch();
    const { diaries, diariesError } = useSelector(({ diaryListReducer }) => ({
        diaries: diaryListReducer.diaries,
        diariesError: diaryListReducer.diariesError
    }));
    const { authorId } = match.params;
    const { tag } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    const fetchDiaryList = useCallback((lastId) => {
        dispatch(diaryList({ authorId, tag, last_id: lastId.current }))
    },[authorId, tag, dispatch]);

    const lastId = useRef(null);

    return (
        <DiaryCards diaries={diaries} diariesError={diariesError} lastId={lastId} fetchDiaryList={fetchDiaryList}/>
    )
}

export default withRouter(DiaryListContainer)
