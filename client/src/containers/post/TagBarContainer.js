import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TagBar from '../../components/write/TagBar';
import { changeText } from '../../modules/write';

function TagBarContainer() {
    const dispatch = useDispatch();
    const tags = useSelector(state => state.writeReducer.tags);
    console.log("여기???", tags);
    const onChangeTags = nextTags => {
        dispatch(changeText({ name: "tags", value: nextTags }));
    }
        

    return (
        <TagBar onChangeTags={onChangeTags} tags={tags} />
    )
}

export default TagBarContainer
