const media = (size) => {
    return `@media (max-width: ${size}px)`
}

export const myMediaQuery = {
    mobile: media(480),
    mobileAndTablet: media(768),
    tablet: media(1000),
}

export default myMediaQuery;