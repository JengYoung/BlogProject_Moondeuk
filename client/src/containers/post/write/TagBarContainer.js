import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TagBar from '../../../components/write/TagBar';
import { changeText } from '../../../modules/write';

function TagBarContainer() {
    const dispatch = useDispatch();
    const tags = useSelector(({writeReducer}) => ({tags: writeReducer.tags}));

    const onChangeTags = tags => {
        dispatch(changeText({ name: "tags", value: tags }));
    }
        

    return (
        <TagBar onChangeTags={onChangeTags} tags={tags} />
    )
}

export default TagBarContainer
