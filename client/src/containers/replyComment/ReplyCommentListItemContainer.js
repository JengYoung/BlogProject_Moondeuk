import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import BtnsWrapper from '../../components/common/comment/BtnsWrapper'
import ListItem from '../../components/common/comment/ListItem'
import OptionBtnsWrapper from '../../components/common/comment/OptionBtnsWrapper'
import UpdateInputWrapper from '../../components/common/comment/UpdateInputWrapper';
import { changeText, deleteReplyComment, settingUpdate, updateReplyComment } from '../../modules/comment';
import LikeWrapperContainer from '../like/LikeWrapperContainer';
import InputWrapperContainer from './InputWrapperContainer';

function ReplyCommentListItemContainer({ _id, comment_id, replier, replier_id, content }) {
    const { updatedContent, user } = useSelector(({ commentReducer, userReducer }) => ({
        updatedContent: commentReducer.updatedContent,
        user: userReducer.user,
    }))
    const loginUser_id = user ? user._id : null;
    const dispatch = useDispatch();
    const [ isUpdateMode, setisUpdateMode ] = useState(false);
    const [ isReplyCommentMode, setIsReplyCommentMode ] = useState(false);
    const onUpdateMode = () => setisUpdateMode(() => !isUpdateMode);
    const onIsReplyCommentMode = () => setIsReplyCommentMode(() => !isReplyCommentMode);

    const onUpdate = (value) => dispatch(updateReplyComment({comment_id: _id, replyComment_id: comment_id, content: value}));;
    const onDelete = () => dispatch(deleteReplyComment({ comment_id: _id, replyComment_id: comment_id }));
    const onSettingUpdate = () => dispatch(settingUpdate({ idx: comment_id, content: content }))
    const onChangeText = useCallback(payload => {
        dispatch(changeText(payload));
    }, [dispatch]);


    return (
        <ListItem 
            isUpdateMode={isUpdateMode} 
            replier={replier} 
            content={isUpdateMode 
                        ? <UpdateInputWrapper 
                            comment_id={comment_id}
                            content={content}
                            updatedContent={updatedContent}
                            onUpdate={onUpdate}
                            onUpdateMode={onUpdateMode}
                            onChangeText={onChangeText}
                        />
                        : content
                    }
        >
            {
                loginUser_id === replier_id &&
                <BtnsWrapper 
                    onUpdateMode={onUpdateMode} 
                    onSettingUpdate={onSettingUpdate} 
                    onDelete={onDelete}
                />
            }
            <OptionBtnsWrapper 
                isReply 
                onIsReplyCommentMode={onIsReplyCommentMode}
                likeBtn={<LikeWrapperContainer isComment typeName="ReplyComment" typeId={comment_id}/>}
            />
            {isReplyCommentMode && 
                <InputWrapperContainer _id={_id} replier_id={replier_id} hasMarginLeft comment_id={comment_id}/>
            }
        </ListItem>
    )
}

export default ReplyCommentListItemContainer
