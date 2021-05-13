import React from 'react';
import CommentInputBtn from '../components/comment/CommentInputBtn';
import CommentInputWrapper from '../components/comment/CommentInputWrapper';
import CommentToggleBtn from '../components/comment/CommentToggleBtn';
import ResponsiveWrapper from '../components/common/Responsive';
import DiaryFooter from '../components/read/DiaryFooter';
import DiaryWrap from '../components/read/DiaryWrap';
import CommentInputWrapperContainer from '../containers/comment/CommentInputWrapperContainer';
import CommentToggleBtnContainer from '../containers/comment/CommentToggleBtnContainer';
import CommentWrapperContainer from '../containers/comment/CommentWrapperContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LikeWrapperContainer from '../containers/like/LikeWrapperContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';

function DiaryPage() {
    return (
        <div>
            <HeaderContainer />
            <DiaryContainer/>
            <DiaryFooter>
                <>
                    <LikeWrapperContainer></LikeWrapperContainer>
                    <CommentToggleBtnContainer></CommentToggleBtnContainer>    
                    <CommentInputBtn></CommentInputBtn>          
                </>
            </DiaryFooter>
            <CommentWrapperContainer />
            <CommentInputWrapperContainer/>
        </div>
    )
}

export default DiaryPage
