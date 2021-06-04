import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Editor from '../../../components/write/Editor';
import { changeStyle, changeText, initializeDiary } from '../../../modules/write';

function WriteFormContainer() {
    const { title, body, subtitle, titleStyle } = useSelector(({ writeReducer }) => ({
        title: writeReducer.title,
        body: writeReducer.body,
        subtitle: writeReducer.subtitle,
        titleStyle: writeReducer.titleStyle
    }));
    // const [ titleStyle, setTitleStyle ] = useState({
    //     isCenter: false,
    //     isFullSize: true,
    //     thumbnail: '',
    //     color: '',
    //     fontColor: 'black',
    //     font: '',
    // });

    const dispatch = useDispatch();
    const onChangeText = useCallback(payload => dispatch(changeText(payload)), [dispatch]);
    const onChangeStyle = useCallback(payload => dispatch(changeStyle(payload)), [dispatch]);
    useEffect(() => {
        return () => dispatch(initializeDiary());
    }, [dispatch])

    return (
        <>
            <Editor 
                title={title} 
                body={body} 
                subtitle={subtitle} 
                onChangeText={onChangeText}
                titleStyle={titleStyle}
                onChangeStyle={onChangeStyle}
            ></Editor>
        </>
    )
}

export default withRouter(WriteFormContainer)
