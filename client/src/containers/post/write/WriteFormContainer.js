import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Editor from '../../../components/write/Editor';
import TagBar from '../../../components/write/TagBar';
import ThumbnailTitle from '../../../components/write/ThumbnailTitle';
import { changeStyle, changeText, initializeDiary } from '../../../modules/write';

function WriteFormContainer() {
    const { title, body, subtitle, titleStyle, tags } = useSelector(({ writeReducer }) => ({
        title: writeReducer.title,
        body: writeReducer.body,
        subtitle: writeReducer.subtitle,
        titleStyle: writeReducer.titleStyle,
        tags: writeReducer.tags
    }));
    const dispatch = useDispatch();
    const onChangeText = useCallback(payload => dispatch(changeText(payload)), [dispatch]);
    const onChangeStyle = useCallback(payload => dispatch(changeStyle(payload)), [dispatch]);

    const onChangeTags = tags => {
        dispatch(changeText({ name: "tags", value: tags }));
    }

    useEffect(() => {
        return () => dispatch(initializeDiary());
    }, [dispatch])

    return (
        <>
            <ThumbnailTitle
                title={title}
                subtitle={subtitle} 
                titleStyle={titleStyle}
                onChangeStyle={onChangeStyle}
                onChangeText={onChangeText}
            >
                <TagBar onChangeTags={onChangeTags} tags={tags} titleStyle={titleStyle}/>
            </ThumbnailTitle>
            <Editor  
                body={body} 
                onChangeText={onChangeText}
            />
        </>
    )
}

export default withRouter(WriteFormContainer)
