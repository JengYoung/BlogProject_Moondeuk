import LinkedDiaryCard from 'components/read/LinkedDiaryCard';
import LinkedDiaryWrapper from 'components/read/LinkedDiaryWrapper';
import CommentWrapperContainer from 'containers/comment/CommentWrapperContainer';
import { setProgressBarWidth } from 'modules/util';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Diary from '../../../components/read/Diary'
import deleteAPI from '../../../lib/routes/post/delete';
import { initializeDiary, readDiary } from '../../../modules/diary';
import { settingUpdate } from '../../../modules/write';

const DiaryContainer = ({ match, history, width, setWidth }) => {
    const dispatch = useDispatch();
    const { diary, diaryError, user, progressBarWidth } = useSelector(({ diaryReducer, userReducer, utilReducer }) => ({
        diary: diaryReducer.diary,
        diaryError: diaryReducer.diaryError,
        user: userReducer.user,
        progressBarWidth: utilReducer.progressBarWidth,
    }));
    const userId = user ? user.userId : null; 
    const { diaryId } = match.params;
    const beforeDiary = diary?.beforeDiary;
    const afterDiary = diary?.afterDiary;

    const updateProgressBarWidth = useCallback((progressBarWidth) => dispatch(setProgressBarWidth(progressBarWidth)), [dispatch])
    const startReadDiary = useCallback((diaryId) => {
        dispatch(readDiary(diaryId));
    }, [dispatch])
    useEffect(() => {
        startReadDiary(diaryId)
        return () => {
            dispatch(initializeDiary());
        }
    }, [dispatch, startReadDiary, diaryId]);

    const onPatch = () => {
        dispatch(settingUpdate(diary));
        history.push(`/write/@${userId}/${diaryId}`);
    };

    const onDelete = async () => {
        try {
            await deleteAPI(diaryId);
            alert("삭제되었습니다.");
            history.push('/');
        } catch(e) {
            alert("삭제 도중 에러가 발생했습니다.");
            console.error(e);
        }
    }

    return (
        <>
            <Diary 
                diary={diary} 
                diaryError={diaryError} 
                userId={userId} 
                onPatch={onPatch} 
                onDelete={onDelete}
                width={width}
                setWidth={setWidth}
                updateProgressBarWidth={updateProgressBarWidth}
                progressBarWidth={progressBarWidth}
            />
            <CommentWrapperContainer />
            <LinkedDiaryWrapper userId={userId}>
                { beforeDiary && <LinkedDiaryCard linkedDiary={beforeDiary} isPostedBefore/> }
                { afterDiary && <LinkedDiaryCard linkedDiary={afterDiary} isPostedBefore={false}/> }
            </LinkedDiaryWrapper>
        </>
    )
}

export default withRouter(DiaryContainer);
