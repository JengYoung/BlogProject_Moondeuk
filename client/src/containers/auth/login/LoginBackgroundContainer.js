import LoginBackground from 'components/login/LoginBackground'
import useTheme from 'lib/hooks/useTheme'
import React from 'react'

function LoginBackgroundContainer({ register }) {
    const { theme } = useTheme();
    return (
        <LoginBackground theme={theme} register={register}/>
    )
}

export default React.memo(LoginBackgroundContainer)
