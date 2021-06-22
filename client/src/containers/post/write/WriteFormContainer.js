import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Editor from '../../../components/write/Editor';
import ThumbnailTitle from '../../../components/write/ThumbnailTitle';
import { changeStyle, changeText, initializeDiary } from '../../../modules/write';

function WriteFormContainer() {
    const { title, body, subtitle, titleStyle } = useSelector(({ writeReducer }) => ({
        title: writeReducer.title,
        body: writeReducer.body,
        subtitle: writeReducer.subtitle,
        titleStyle: writeReducer.titleStyle
    }));
    const dispatch = useDispatch();
    const onChangeText = useCallback(payload => dispatch(changeText(payload)), [dispatch]);
    const onChangeStyle = useCallback(payload => dispatch(changeStyle(payload)), [dispatch]);
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
            />
            <Editor  
                body={body} 
                onChangeText={onChangeText}
            />
        </>
    )
}

export default withRouter(WriteFormContainer)
