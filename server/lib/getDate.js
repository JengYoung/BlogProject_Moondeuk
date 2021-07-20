function replaceAll(str, match, replacement){
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
}

const getDate = (time) => {
    const options = {
        weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric'
    };
    const date = new Date(time);
    const dateFormat = date.toLocaleDateString("en-US", options)
    return replaceAll(dateFormat, '/', '. ');
};

export default getDate;