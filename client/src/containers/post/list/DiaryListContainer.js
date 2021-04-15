import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import DiaryList from '../../../components/list/DiaryList';
import { diaryList } from '../../../modules/diaryList';
import { withRouter } from 'react-router';
import UserInfo from '../../../components/common/UserInfo';

function DiaryListContainer({ match, location }) {
    const { userId } = match.params;
    const { tag } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    const dispatch = useDispatch();
    const { diaries, diariesError } = useSelector(({ diaryListReducer }) => ({
        diaries: diaryListReducer.diaries,
        diariesError: diaryListReducer.diariesError
    }));
    
    useEffect(() => {
        dispatch(diaryList({userId, tag}))
    }, [dispatch, userId, tag])
    console.log(diaries)

    return (
        <div>
            {userId && <UserInfo userId={userId}></UserInfo>}
            <DiaryList diaries={diaries} diariesError={diariesError}/>
        </div>
    )
}

export default withRouter(DiaryListContainer)
