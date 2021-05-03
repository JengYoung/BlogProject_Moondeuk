import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BtnsWrapper from '../../components/common/comment/BtnsWrapper'
import ListItem from '../../components/common/comment/ListItem'
import OptionBtnsWrapper from '../../components/common/comment/OptionBtnsWrapper'
import UpdateInputWrapper from '../../components/common/comment/UpdateInputWrapper';
import { updateComment } from '../../modules/comment';
import InputWrapperContainer from './InputWrapperContainer';

function ReplyCommentListItemContainer({ _id, comment_id, replierInfo, content }) {
    const dispatch = useDispatch();
    const [ isUpdateMode, setisUpdateMode ] = useState(false);
    const onUpdateMode = () => setisUpdateMode(!isUpdateMode);
    const [ isReplyCommentMode, setIsReplyCommentMode ] = useState(false);
    const onIsReplyCommentMode = () => {
        setIsReplyCommentMode(!isReplyCommentMode)
    };

    return (
        <ListItem 
            isUpdateMode={isUpdateMode} 
            replierInfo={replierInfo} 
            content={isUpdateMode 
                        ? {content} 
                        : <UpdateInputWrapper 
                            // comment_id={comment_id}
                            // content={content}
                            // onUpdate={onUpdate}
                            // onUpdateMode={onUpdateMode}
                            // onChangeText={onChangeText}
                        />
                    }
        >
            <BtnsWrapper onUpdateMode={onUpdateMode}></BtnsWrapper>
            <OptionBtnsWrapper onIsReplyCommentMode={onIsReplyCommentMode}></OptionBtnsWrapper>
            {isReplyCommentMode && 
                <InputWrapperContainer _id={_id} hasMarginLeft comment_id={comment_id}/>
            }
        </ListItem>
    )
}

export default ReplyCommentListItemContainer
