import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import PostDiaryBtnsWrapper from '../../../components/write/PostDiaryBtnsWrapper';
import { updateDiary, writeDiary } from '../../../modules/write';

function PostDiaryBtnsWrapperContainer({ history, match }) {
    const { diaryId } = match.params;
    const dispatch = useDispatch();
    const { title, subtitle, body, tags, diary, titleStyle, writeError } = useSelector(({ writeReducer }) => ({
        title: writeReducer.title,
        subtitle: writeReducer.subtitle,
        body: writeReducer.body,
        tags: writeReducer.tags,
        diary: writeReducer.diary,
        writeError: writeReducer.writeError,
        titleStyle: writeReducer.titleStyle
    }))

    //현재 페이지가 수정페이지인지 확인
    const isPatch = (!match.params.diaryId && !match.params.authorId) ? false : true; 

    const onPostDiary = () => {
        if (isPatch) {
            dispatch(updateDiary({ diaryId, title, subtitle, body, tags, titleStyle }));
            return;
        };
        dispatch(writeDiary({title, subtitle, body, tags, titleStyle}))
    };

    const onCancel = () => {
        history.goBack();
    };

    useEffect(() => {
        if (writeError) console.error(writeError)
        if (diary) {
            const { _id, author } = diary;
            history.push(`/@${author.authorId}/${_id}`);
        };
    }, [writeError, diary, history])
    return (
        <PostDiaryBtnsWrapper isPatch={isPatch} onPostDiary={onPostDiary} onCancel={onCancel}/>
    )
}

export default withRouter(PostDiaryBtnsWrapperContainer)
