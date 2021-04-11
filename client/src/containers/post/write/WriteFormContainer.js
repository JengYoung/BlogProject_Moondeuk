import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import WriteBackground from '../../../components/write/WriteBackground';
import WriteForm from '../../../components/write/WriteForm';
import { changeText, initializeDiary } from '../../../modules/write';

function WriteFormContainer({ match, history, location }) {
    const { title, body } = useSelector(({ writeReducer }) => ({
        title: writeReducer.title,
        body: writeReducer.body
    }));
    const dispatch = useDispatch();
    const onChangeText = useCallback(payload => dispatch(changeText(payload)),[dispatch]);
    useEffect(() => {
        return () => dispatch(initializeDiary());
    }, [dispatch])
    return (
        <>
            <WriteBackground>
                <WriteForm onChangeText={onChangeText} title={title} body={body}></WriteForm>
            </WriteBackground>
        </>
    )
}

export default withRouter(WriteFormContainer)
