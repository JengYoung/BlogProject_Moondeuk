import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import PostDiaryBtnsWrapper from '../../../components/write/PostDiaryBtnsWrapper';
import { updateDiary, writeDiary } from '../../../modules/write';

function PostDiaryBtnsWrapperContainer({ history, match }) {
    const { diaryId } = match.params;
    console.log("나다", diaryId);
    const dispatch = useDispatch();
    const { title, body, tags, diary, writeError, userId } = useSelector(({ writeReducer, userReducer }) => ({
        title: writeReducer.title,
        body: writeReducer.body,
        tags: writeReducer.tags,
        diary: writeReducer.diary,
        writeError: writeReducer.writeError,
        userId: userReducer.user.userId,
    }))
    const isPatch = (!match.params.diaryId && !match.params.userId) ? false : true;

    const onPostDiary = () => {
        if (isPatch && match.params.userId === userId) {
            dispatch(updateDiary({ diaryId, title, body, tags }));
            return;
        };
        dispatch(writeDiary({title, body, tags}))
    };

    const onCancel = () => {
        history.goBack();
    };

    useEffect(() => {
        if (writeError) console.error(writeError)
        if (diary) {
            const { _id, author } = diary;
            history.push(`/@${author.userId}/${_id}`);
        };
    }, [writeError, diary, history])
    return (
        <PostDiaryBtnsWrapper isPatch={isPatch} onPostDiary={onPostDiary} onCancel={onCancel}/>
    )
}

export default withRouter(PostDiaryBtnsWrapperContainer)
