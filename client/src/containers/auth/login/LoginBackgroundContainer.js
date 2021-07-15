import LoginBackground from 'components/login/LoginBackground'
import useTheme from 'lib/hooks/useTheme'
import React from 'react'

function LoginBackgroundContainer() {
    const { theme } = useTheme();
    return (
        <LoginBackground theme={theme}/>
    )
}

export default React.memo(LoginBackgroundContainer)
