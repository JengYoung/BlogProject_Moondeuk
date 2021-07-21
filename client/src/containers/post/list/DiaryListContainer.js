import React, { useEffect, useState } from 'react';
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
    const [ lastId, setLastId ] = useState(null);

    useEffect(() => {
        if (!isUserPage) {
            dispatch(diaryList({authorId: null, tag: null}));
        }
        const { authorId } = match.params;
        const { tag } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(diaryList({ authorId, tag, last_id: lastId }))
    }, [lastId, dispatch])

    return (
        <DiaryCards diaries={diaries} diariesError={diariesError} setLastId={setLastId}/>
    )
}

export default withRouter(DiaryListContainer)
