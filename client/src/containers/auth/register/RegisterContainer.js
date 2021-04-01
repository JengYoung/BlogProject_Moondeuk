import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import RegisterForm from '../../../components/register/RegisterForm';
import registerReducer, { onChangeInput } from '../../../modules/register';


const RegisterContainer = () => {
    const dispatch = useDispatch();
    const { register, registerError } = useSelector(({registerReducer}) => ({
        registerError: registerReducer.registerError,
        register: registerReducer.register,
    }))
};

export default RegisterContainer
