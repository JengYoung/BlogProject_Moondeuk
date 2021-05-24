import React from 'react'
import { useSelector } from 'react-redux'
import CommentInputBtn from '../../../components/comment/CommentInputBtn'
import DiaryFooter from '../../../components/read/DiaryFooter'
import CommentToggleBtnContainer from '../../comment/CommentToggleBtnContainer'
import LikeWrapperContainer from '../../like/LikeWrapperContainer'

function DiaryFooterContainer() {
    const { diary } = useSelector(state => ({ diary: state.diaryReducer.diary }));
    const diaryId = diary ? diary._id : null;
    console.log("너가 삑이야?", diaryId)
    return (
        <DiaryFooter>
            <>
                <LikeWrapperContainer typeName="Diary" typeId={diaryId}></LikeWrapperContainer>
                <CommentToggleBtnContainer></CommentToggleBtnContainer>    
                <CommentInputBtn></CommentInputBtn>          
            </>
        </DiaryFooter>
    )
}

export default React.memo(DiaryFooterContainer)
