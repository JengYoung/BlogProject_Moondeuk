import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import WriteBackground from '../../components/write/WriteBackground'
import WriteForm from '../../components/write/WriteForm'
import { changeText, initializeDiary } from '../../modules/write';

function WriteFormContainer() {
    const { title, body } = useSelector(({ writeReducer }) => ({
        title: writeReducer.title,
        body: writeReducer.body
    }));
    const dispatch = useDispatch();
    const onChangeText = useCallback(payload => dispatch(changeText(payload)),[dispatch]);
    useEffect(() => {
        dispatch(initializeDiary());
    }, [dispatch])
    return (
        <>
            <WriteBackground>
                <WriteForm onChangeText={onChangeText} title={title} body={body}></WriteForm>
            </WriteBackground>
        </>
    )
}

export default WriteFormContainer
