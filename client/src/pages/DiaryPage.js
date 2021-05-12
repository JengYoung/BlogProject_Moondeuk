import React from 'react';
import CommentToggleBtn from '../components/comment/CommentToggleBtn';
import ResponsiveWrapper from '../components/common/Responsive';
import DiaryFooter from '../components/read/DiaryFooter';
import DiaryWrap from '../components/read/DiaryWrap';
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
                <CommentWrapperContainer />
                <>
                    <LikeWrapperContainer></LikeWrapperContainer>
                    <CommentToggleBtn></CommentToggleBtn>              
                </>
            </DiaryFooter>
            {/* <LikeWrapperContainer /> */}

            {/* <DiaryWrap>
                <DiaryContainer/>
                <LikeWrapperContainer />
            </DiaryWrap> */}
        </div>
    )
}

export default DiaryPage
