const myMediaQuery = (size) => {
    return `@media (max-width: ${size}px)`
}

export const device = {
    mobile: myMediaQuery(480),
    tablet: myMediaQuery(991),
}

export default myMediaQuery;