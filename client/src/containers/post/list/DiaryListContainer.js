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
    const fetchDiaryList = useCallback((lastId) => {
        if (!isUserPage) {
            dispatch(diaryList({authorId: null, tag: null}));
        }
        const { authorId } = match.params;
        const { tag } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(diaryList({ authorId, tag, last_id: lastId.current }))
    },[location, match, dispatch, isUserPage]);

    const lastId = useRef(null);
    return (
        <DiaryCards diaries={diaries} diariesError={diariesError} lastId={lastId} fetchDiaryList={fetchDiaryList}/>
    )
}

export default withRouter(DiaryListContainer)
