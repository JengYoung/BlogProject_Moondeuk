import React from 'react'
import { useState } from 'react';
import BtnsWrapper from '../../components/common/comment/BtnsWrapper'
import ListItem from '../../components/common/comment/ListItem'
import OptionBtnsWrapper from '../../components/common/comment/OptionBtnsWrapper'
import InputWrapperContainer from './InputWrapperContainer';

function ReplyCommentListItemContainer({ _id, comment_id, replierInfo, content }) {
    const [ isUpdateMode, setisUpdateMode ] = useState(false);
    const onIsUpdateMode = () => setisUpdateMode(!isUpdateMode);
    const [ isReplyCommentMode, setIsReplyCommentMode ] = useState(false);
    const onIsReplyCommentMode = () => {
        setIsReplyCommentMode(!isReplyCommentMode)
        console.log(isReplyCommentMode)
    };
    return (
        <ListItem replierInfo={replierInfo} content={content}>
            <BtnsWrapper></BtnsWrapper>
            <OptionBtnsWrapper onIsReplyCommentMode={onIsReplyCommentMode}></OptionBtnsWrapper>
            {isReplyCommentMode && 
                <InputWrapperContainer _id={_id} hasMarginLeft comment_id={comment_id}/>
            }
        </ListItem>
    )
}

export default ReplyCommentListItemContainer
