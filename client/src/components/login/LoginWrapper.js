import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import {Link} from 'react-router-dom';
import HeadName from '../common/HeadName';
import registerReducer from '../../modules/register';
import ErrorMessage from '../common/ErrorMessage';
/*
*/

const StyledLoginForm = styled.form`
    width: 300px;
    height: auto;
    padding: 3rem 3rem 0 3rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
`;

const Links = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
`;

const StyledLink = styled(Link)`
    color: white;
    transition: all 0.7s;
    &:hover {
        color: yellow;
        opacity: 1;
        transform: scale(1.05);
    }
`;

const LoginWrapper = ({onChange, onSubmit, error}) => {
    return (
        <StyledLoginForm onSubmit={onSubmit}>
            <HeadName colorWhite name="로그인"></HeadName>
            <Input colorWhite onChange={onChange} name="userId" value={registerReducer.userId}/>
            <Input colorWhite onChange={onChange} type="password" name="password" value={registerReducer.password} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button fullWidth name="로그인" />
            <Links>
                <StyledLink to='/register'>회원가입</StyledLink>
            </Links>
        </StyledLoginForm>
    );
};

export default LoginWrapper;