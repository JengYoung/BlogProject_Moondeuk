import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Editor from '../../../components/write/Editor';
import { changeText, initializeDiary } from '../../../modules/write';

function WriteFormContainer() {
    const { title, body, subtitle } = useSelector(({ writeReducer }) => ({
        title: writeReducer.title,
        body: writeReducer.body,
        subtitle: writeReducer.subtitle,
    }));
    const dispatch = useDispatch();
    const onChangeText = useCallback(payload => dispatch(changeText(payload)),[dispatch]);

    useEffect(() => {
        return () => dispatch(initializeDiary());
    }, [dispatch])

    return (
        <>
            <Editor title={title} body={body} subtitle={subtitle} onChangeText={onChangeText}></Editor>
        </>
    )
}

export default withRouter(WriteFormContainer)
