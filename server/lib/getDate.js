const getDate = (time) => {
    const options = {
        weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric'
    };
    const date = new Date(time);
    const dateFormat = date.toLocaleDateString("en-US", options)
                            .replaceAll('/', '. ');
    return dateFormat;
};

export default getDate;